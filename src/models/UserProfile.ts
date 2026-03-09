import type { IGitHubUser, IGitHubRepo } from '../types/github';

export class UserProfile {
    public id: string;
    public name: string;
    public bio: string;
    public avatarUrl: string;
    public followers: number;
    public following: number;
    public publicRepos: number;
    public location: string;
    public htmlUrl: string;
    public joinedAt: string;

    constructor(data: IGitHubUser) {
        this.id = data.login;
        this.name = data.name || data.login;
        this.bio = data.bio || 'Sin biografía';
        this.avatarUrl = data.avatar_url;
        this.followers = data.followers;
        this.following = data.following;
        this.publicRepos = data.public_repos;
        this.location = data.location || 'N/A';
        this.htmlUrl = data.html_url;
        this.joinedAt = new Date(data.created_at).toLocaleDateString();
    }

    public getJoinedYear(): string {
        return new Date(this.joinedAt).getFullYear().toString();
    }
}

export class Repository {
    public name: string;
    public description: string;
    public url: string;
    public language: string;
    public stars: number;
    public forks: number;
    public lastUpdate: string;

    constructor(data: IGitHubRepo) {
        this.name = data.name;
        this.description = data.description || 'Sin descripción';
        this.url = data.html_url;
        this.language = data.language || 'Plain Text';
        this.stars = data.stargazers_count;
        this.forks = data.forks_count;
        this.lastUpdate = new Date(data.updated_at).toLocaleDateString();
    }
}
