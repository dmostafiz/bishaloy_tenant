export function getSeoData(tenant: any) {
    if (!tenant) {
        return {
            title: 'Bishaloy – Bangla Story Platform',
            description: 'Read and publish Bangla stories, poems, and series.',
            ogTitle: 'Bishaloy',
            ogDescription: 'A Bangla storytelling platform',
        }
    }

    // tenant site
    return {
        title: `${tenant.name}`,
        description: `${tenant.title}`,
        ogTitle: `${tenant.name}`,
        ogDescription: `${tenant.title}`,
    }
}