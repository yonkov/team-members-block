interface ContentObject {
	//This property is always present
	rendered: string;
	//This property is only present in some contexts
	raw?: string;
}

export default interface TeamMember {
    id: string,
    date: string,
    date_gmt: string,
    slug: string,
    status: string,
    type: string,
    link: string,
    title: ContentObject,
    content: ContentObject,
    featured_image:string,
    author: number,
    featured_media: number,
    template?: string,
    _links: Object,
    ic_meta_position: string,
}