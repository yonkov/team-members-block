/**
 * Get all the team members using the WordPress rest api
 * @package Team Members Block
 * @since 1.0.0
 * @see https://developer.wordpress.org/rest-api/reference/
 */
import { useEffect, useState } from 'react';
import TeamMember from './shared/interfaces/team-member'

declare var Team_Members_Block_script_params: {
  rest_url: string;
}
const restUrl = Team_Members_Block_script_params.rest_url;
export const getPosts = () => {
  const [data, setData] = useState<Array<TeamMember> | null>([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(restUrl + 'wp/v2/team-members?filter[orderby]=date&order=asc');
      const json = await response.json();
      setData(json);
    };
    getData();
  }, []);

  return data;
};
