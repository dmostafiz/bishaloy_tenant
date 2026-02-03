export interface LayoutComponents {
  header: string
  navBar: string
  footer: string
  carousel: string
}

export interface Tenant {
  name: string,
  title: string,
  subDomain: string,
  domain: string
  layoutComponents: LayoutComponents
}