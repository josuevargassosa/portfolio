'use client';

const codeSnippet = `import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMenuDto } from './dto/create-menu.dto';

@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) {}

  async findBySlug(slug: string) {
    return this.prisma.business.findUnique({
      where: { slug },
      include: {
        categories: {
          where: { isActive: true },
          orderBy: { order: 'asc' },
          include: {
            products: {
              where: { isActive: true },
              orderBy: { order: 'asc' },
            },
          },
        },
        locations: { where: { isActive: true } },
      },
    });
  }

  async getAnalytics(businessId: string) {
    const [views, orders] = await Promise.all([
      this.prisma.menuView.count({
        where: { businessId },
      }),
      this.prisma.whatsappClick.count({
        where: { businessId },
      }),
    ]);
    return { views, orders, conversion: views > 0 ? orders / views : 0 };
  }

  async updateSettings(id: string, data: UpdateSettingsDto) {
    return this.prisma.business.update({
      where: { id },
      data: {
        template: data.template,
        primaryColor: data.primaryColor,
        fontFamily: data.fontFamily,
      },
    });
  }
}

export function useMenuConfig(slug: string) {
  const [config, setConfig] = useState<MenuConfig | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(\`/api/menu/\${slug}\`)
      .then(res => res.json())
      .then(data => {
        setConfig(data);
        setLoading(false);
      });
  }, [slug]);

  return { config, loading };
}

interface RouteConfig {
  path: string;
  component: React.ComponentType;
  guard?: (user: User) => boolean;
}

const routes: RouteConfig[] = [
  { path: '/admin/dashboard', component: Dashboard },
  { path: '/admin/products', component: ProductList },
  { path: '/admin/analytics', component: Analytics },
  { path: '/admin/settings', component: Settings },
];

async function deployToProduction(branch: string) {
  const build = await runBuild({ target: 'production' });
  if (!build.success) throw new Error(build.error);

  await prisma.migrate.deploy();
  await invalidateCache(['menu', 'analytics']);

  return { deployed: true, version: build.version };
}`;

export function CodeBackground() {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 flex gap-8 opacity-[0.07] dark:opacity-[0.08]">
        <div className="animate-scroll-code shrink-0">
          <pre className="text-[11px] leading-[1.6] font-mono text-foreground whitespace-pre">
            {codeSnippet}
          </pre>
        </div>
        <div className="animate-scroll-code shrink-0" style={{ animationDelay: '-30s' }}>
          <pre className="text-[11px] leading-[1.6] font-mono text-foreground whitespace-pre">
            {codeSnippet}
          </pre>
        </div>
      </div>
    </div>
  );
}
