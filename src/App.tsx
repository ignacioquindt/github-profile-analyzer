import React, { useState } from 'react';
import { Search, Github, MapPin, Users, BookOpen, Star, GitFork, ExternalLink, Loader2 } from 'lucide-react';
import { GitHubService } from './services/GitHubService';
import { UserProfile, Repository } from './models/UserProfile';
import './index.css';

function App() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState<UserProfile | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError('');
    setUser(null);
    setRepos([]);

    try {
      const userData = await GitHubService.getUser(username);
      const repoData = await GitHubService.getRepositories(username);

      setUser(new UserProfile(userData));
      setRepos(repoData.map(r => new Repository(r)));
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      {/* Header & Search */}
      <header className="animate-fade" style={{ textAlign: 'center', marginBottom: '4rem', marginTop: '2rem' }}>
        <h1 className="glow-text" style={{ fontSize: '3.5rem', marginBottom: '1rem', background: 'linear-gradient(to right, #6366f1, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Dev-Portfolio Dashboard
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Analiza perfiles de GitHub con estilo profesional</p>

        <form onSubmit={handleSearch} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} size={20} />
            <input
              type="text"
              placeholder="Nombre de usuario de GitHub..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="glass-card"
              style={{ width: '100%', padding: '1rem 1rem 1rem 3rem', background: 'rgba(30, 41, 59, 0.5)', border: '1px solid var(--glass-border)', color: 'white', borderRadius: '1rem', outline: 'none' }}
            />
          </div>
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? <Loader2 className="animate-spin" size={20} /> : 'Analizar'}
          </button>
        </form>
        {error && <p style={{ color: '#ef4444', marginTop: '1rem' }}>{error}</p>}
      </header>

      {user && (
        <main className="animate-fade">
          {/* Profile Header */}
          <section className="glass-card" style={{ padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative' }}>
              <img src={user.avatarUrl} alt={user.name} style={{ width: '150px', height: '150px', borderRadius: '50%', border: '4px solid var(--primary)' }} />
              <div style={{ position: 'absolute', bottom: '0', right: '0', background: 'var(--primary)', padding: '0.5rem', borderRadius: '50%', color: 'white' }}>
                <Github size={20} />
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{user.name}</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', maxWidth: '600px' }}>{user.bio}</p>
              <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><MapPin size={16} /> {user.location}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>Joined {user.joinedAt}</span>
              </div>
            </div>
            <a href={user.htmlUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
              Ver Perfil <ExternalLink size={16} />
            </a>
          </section>

          {/* Stats Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <Users size={32} style={{ color: 'var(--primary)', marginBottom: '1rem', margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.5rem' }}>{user.followers}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Seguidores</p>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <BookOpen size={32} style={{ color: 'var(--primary)', marginBottom: '1rem', margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.5rem' }}>{user.publicRepos}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Repositorios</p>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <Users size={32} style={{ color: 'var(--primary)', marginBottom: '1rem', margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.5rem' }}>{user.following}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Siguiendo</p>
            </div>
          </div>

          {/* Repositories */}
          <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Proyectos Recientes</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '5rem' }}>
            {repos.map(repo => (
              <div key={repo.name} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <h4 style={{ color: 'var(--primary)', fontSize: '1.1rem' }}>{repo.name}</h4>
                  <a href={repo.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={18} style={{ color: 'var(--text-secondary)' }} />
                  </a>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', height: '3rem', overflow: 'hidden' }}>{repo.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                  <span style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary)', padding: '0.2rem 0.6rem', borderRadius: '1rem', fontSize: '0.8rem' }}>
                    {repo.language}
                  </span>
                  <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}><Star size={14} /> {repo.stars}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}><GitFork size={14} /> {repo.forks}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
