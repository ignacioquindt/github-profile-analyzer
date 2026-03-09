import type { IGitHubUser, IGitHubRepo } from '../types/github';

export class GitHubService {
    private static BASE_URL = 'https://api.github.com/users';

    public static async getUser(username: string): Promise<IGitHubUser> {
        const response = await fetch(`${this.BASE_URL}/${username}`);
        if (!response.ok) {
            throw new Error(`User ${username} not found`);
        }
        return response.json();
    }

    public static async getRepositories(username: string): Promise<IGitHubRepo[]> {
        const response = await fetch(`${this.BASE_URL}/${username}/repos?sort=updated&per_page=10`);
        if (!response.ok) {
            throw new Error(`Error fetching repositories for ${username}`);
        }
        return response.json();
    }
}
