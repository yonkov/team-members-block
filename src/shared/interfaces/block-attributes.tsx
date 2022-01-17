import TeamMember from "./team-member"

interface BlockAttributes {
	attributes:{
		id: string,
		teamMembers: Array<TeamMember>
	},
	setAttributes:any,
}

export default BlockAttributes