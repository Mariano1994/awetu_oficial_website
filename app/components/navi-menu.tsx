"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Menu, X } from "lucide-react";
import { useMenuToggle } from "../contexts/menuToggle";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Awetu Satisfy",
    href: "/awetu_satisfy",
    description:
      "Uma plataforma SaaS de ponta projetada para capacitar empresas de todos os tamanhos a capturar, analisar e agir sobre o feedback do cliente em tempo real. Obtenha insights inestimáveis, impulsione a satisfação do cliente e alimente o crescimento do negócio com nossa solução intuitiva e poderosa.",
  },
  // {
  //   title: "BuyExpress",
  //   href: "/buy_express",
  //   description:
  //     "For sighted users to preview content available behind a link.",
  // },
  {
    title: "StudySmart",
    href: "/study_smart",
    description:
      "A plataforma definitiva para estudantes que desejam maximizar seu potencial acadêmico, criar hábitos saudáveis e administrar suas finanças com inteligência.",
  },
];

function Navigation() {
  const { isOpen, handleToggleMenu } = useMenuToggle();

  return (
    <>
      <NavigationMenu className="relative">
        <div onClick={handleToggleMenu} className="md:hidden">
          {isOpen ? (
            <X className="h-8 w-8 text-white md:hidden " />
          ) : (
            <Menu className="h-8 w-8 text-white md:hidden " />
          )}
        </div>
        <NavigationMenuList
          className={`absolute md:relative md:top-0 flex-col md:flex-row md:h-0 ${
            isOpen
              ? "top-6 bg-white/95 -left-[352px] min-w-[373px] justify-start items-start rounded-sm px-3"
              : " -top-64"
          }`}
        >
          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink
                className={
                  navigationMenuTriggerStyle() +
                  ` ${
                    isOpen ? " text-blue-950 text-md font-semibold" : ""
                  } ml-1 hover:text-light-yellow-100`
                }
              >
                Início
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink
                className={
                  navigationMenuTriggerStyle() +
                  ` ${
                    isOpen ? " text-blue-950 text-md font-semibold" : ""
                  } hover:text-light-yellow-100`
                }
              >
                Sobre nós
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#services" legacyBehavior passHref>
              <NavigationMenuLink
                className={
                  navigationMenuTriggerStyle() +
                  `  ${
                    isOpen ? "text-blue-950 text-md font-semibold" : ""
                  } hover:text-light-yellow-100`
                }
              >
                Serviços
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#portfolio" legacyBehavior passHref>
              <NavigationMenuLink
                className={
                  navigationMenuTriggerStyle() +
                  ` ${
                    isOpen ? " text-blue-950 text-md font-semibold" : ""
                  } hover:text-light-yellow-100`
                }
              >
                Portfolio
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={
                navigationMenuTriggerStyle() +
                ` ${
                  isOpen ? " text-blue-950 text-md font-semibold" : ""
                } hover:text-light-yellow-100`
              }
            >
              Produtos
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 md:line-clamp-3 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navigation;
