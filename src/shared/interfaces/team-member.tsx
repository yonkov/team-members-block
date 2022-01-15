//Post Content
interface ContentObject {
	//This property is always present
	rendered: string;
	//This property is only present in some contexts
	raw?: string;
}
// Social Links
interface SocialLinks{
    ic_fb_field: string,
    ic_linkedin_field:string,
    ic_xing_field:string,
    ic_github_field:string,
}
// Post Type Team Member
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
    ic_social_links: SocialLinks
}