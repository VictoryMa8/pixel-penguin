import {
  ArrowUpRight,
  BookOpen,
  Code2,
  Gamepad2,
  Globe2,
  Hammer,
  Heart,
  MonitorUp,
  Snowflake,
  Sparkles,
  TerminalSquare,
} from 'lucide-react';

const games = [
  {
    slug: 'nuclear-winter', eyebrow: 'Wasteland adventure', title: 'Nuclear Winter', status: 'Live', statusTone: 'live',
    description: 'Explore a quiet, ruined city where every supply matters and the wasteland remembers the choices you make.',
    image: '/games/nuclear-winter.png', imageAlt: 'The Nuclear Winter title screen over a dark, pixel-art city skyline',
    details: ['Exploration', 'Story', 'Keyboard'], tech: ['JavaScript', 'HTML Canvas', 'Pixel art'],
    play: 'https://victoryma8.github.io/nuclear-winter/', source: 'https://github.com/VictoryMa8/nuclear-winter', accent: 'rust',
  },
  {
    slug: 'docker-harbor', eyebrow: 'Learn by playing', title: 'Docker Harbor', status: 'Live', statusTone: 'live',
    description: 'A walkable pixel harbor that teaches containers and DevOps through conversations, quests, and real Docker commands.',
    image: '/games/docker-harbor.png', imageAlt: 'The Docker Harbor title screen with gold lettering on a deep navy background',
    details: ['Educational', 'Adventure', 'Autosave'], tech: ['Docker', 'JavaScript', 'Local storage'],
    play: 'https://victoryma8.github.io/learning-docker/', source: 'https://github.com/VictoryMa8/learning-docker', accent: 'lake',
  },
  {
    slug: 'ancient', eyebrow: 'Tiny 4X strategy', title: 'Ancient', status: 'Fresh build', statusTone: 'beta',
    description: 'Lead Rome from one settler to an empire. Found cities, research technology, raise armies, and outmaneuver Egypt.',
    image: '/games/ancient.png', imageAlt: 'The Ancient introduction screen for a dark pixel-art civilization strategy game',
    details: ['Strategy', 'Procedural maps', 'AI opponent'], tech: ['JavaScript', 'Canvas', 'No framework'],
    play: 'https://victoryma8.github.io/ancient/', source: 'https://github.com/VictoryMa8/ancient', accent: 'empire',
  },
] as const;

function ExternalLink({ href, children, variant = 'primary' }: { href: string; children: React.ReactNode; variant?: 'primary' | 'secondary' }) {
  return (
    <a className={`pixel-button pixel-button--${variant}`} href={href} target="_blank" rel="noreferrer">
      {children}<ArrowUpRight aria-hidden="true" size={15} strokeWidth={2.4} />
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Pixel Penguin home">
          <span className="brand-mark" aria-hidden="true">🐧</span>
          <span><strong>PIXEL PENGUIN</strong><small>MINNESOTA · USA</small></span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#games">Games</a><a href="#workshop">Workshop</a><a href="#about">About</a>
          <a className="nav-github" href="https://github.com/VictoryMa8" target="_blank" rel="noreferrer">
            <Code2 aria-hidden="true" size={16} />GitHub
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker"><Snowflake aria-hidden="true" size={14} /> Indie experiments from the North Star State</p>
          <h1>Small games.<br /><span>Big curiosity.</span></h1>
          <p className="hero-lede">Charming, helpful games made to explore an idea—whether that means surviving a wasteland, learning Docker, or building an empire.</p>
          <div className="hero-actions">
            <a className="pixel-button pixel-button--primary" href="#games"><Gamepad2 aria-hidden="true" size={17} />Browse the games</a>
            <a className="text-link" href="#about">Meet the maker <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-scene" aria-label="Pixel Penguin mascot">
          <div className="hero-moon" aria-hidden="true" /><div className="north-star" aria-hidden="true">✦</div>
          <div className="mascot" aria-hidden="true">🐧</div>
          <div className="ice-label"><span>Currently exploring</span><strong>GAMES × LEARNING</strong></div>
          <div className="snowbank snowbank-one" aria-hidden="true" /><div className="snowbank snowbank-two" aria-hidden="true" />
        </div>
        <div className="hero-stats" aria-label="Collection statistics">
          <div><strong>04</strong><span>Projects</span></div><div><strong>03</strong><span>Playable now</span></div><div><strong>01</strong><span>Web port planned</span></div>
        </div>
      </section>

      <section className="games-section" id="games">
        <div className="section-heading">
          <div><p className="section-number">01 / THE ARCADE</p><h2>Pick your next little adventure.</h2></div>
          <p>Each project began as an experiment and grew into something you can play, learn from, or peek inside.</p>
        </div>
        <div className="game-grid">
          {games.map((game, index) => (
            <article className={`game-card game-card--${game.accent} ${index === 0 ? 'game-card--featured' : ''}`} id={game.slug} key={game.slug}>
              <div className="game-visual">
                <img src={game.image} alt={game.imageAlt} />
                <span className={`status status--${game.statusTone}`}><i aria-hidden="true" /> {game.status}</span>
                <span className="card-index" aria-hidden="true">0{index + 1}</span>
              </div>
              <div className="game-content">
                <p className="game-eyebrow">{game.eyebrow}</p><h3>{game.title}</h3><p className="game-description">{game.description}</p>
                <ul className="detail-list" aria-label="Game features">{game.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                <div className="tech-row" aria-label="Technology used">{game.tech.map((item) => <span key={item}>{item}</span>)}</div>
                <div className="card-actions"><ExternalLink href={game.play}>Play now</ExternalLink><ExternalLink href={game.source} variant="secondary"><Code2 aria-hidden="true" size={15} /> Source</ExternalLink></div>
              </div>
            </article>
          ))}

          <article className="game-card game-card--roster" id="roster-simulator">
            <div className="game-visual terminal-preview">
              <div className="terminal-chrome" aria-hidden="true"><i /><i /><i /><span>franchise_sim</span></div>
              <pre aria-label="Roster Management Simulator menu preview"><span>MINNESOTA</span> FRANCHISE{`\n`}MANAGEMENT{`\n\n`}1. TEAM SUMMARY{`\n`}2. VIEW ROSTERS{`\n`}3. TRADE PLAYERS{`\n`}4. SIMULATE GAME{`\n\n`}<b>SELECT › _</b></pre>
              <span className="status status--planned"><i aria-hidden="true" /> Desktop</span><span className="card-index" aria-hidden="true">04</span>
            </div>
            <div className="game-content">
              <p className="game-eyebrow">Console sports sim</p><h3>Roster Management Simulator</h3>
              <p className="game-description">Run an NBA franchise from the terminal: trade players, develop talent, hire coaches, track standings, and simulate a season.</p>
              <ul className="detail-list" aria-label="Game features"><li>30 teams</li><li>Dynamic stats</li><li>Season simulation</li></ul>
              <div className="tech-row" aria-label="Technology used"><span>C++11</span><span>State machine</span><span>Console UI</span></div>
              <div className="port-note"><MonitorUp aria-hidden="true" size={18} /><span><strong>Web edition planned</strong>A browser port is on the workshop roadmap.</span></div>
              <div className="card-actions"><ExternalLink href="https://github.com/VictoryMa8/roster-management-simulator"><Code2 aria-hidden="true" size={15} /> View project</ExternalLink></div>
            </div>
          </article>
        </div>
      </section>

      <section className="workshop-section" id="workshop">
        <div className="section-heading section-heading--light"><div><p className="section-number">02 / THE WORKSHOP</p><h2>What’s being tinkered with.</h2></div><Hammer aria-hidden="true" size={46} strokeWidth={1.3} /></div>
        <div className="roadmap-grid">
          <article><span>NOW PLAYABLE</span><Globe2 aria-hidden="true" /><h3>Ancient is live</h3><p>The fresh GitHub Pages build is online. Expect a compact 4X game with procedural terrain, research, cities, combat, and an AI rival.</p></article>
          <article><span>NEXT EXPERIMENT</span><MonitorUp aria-hidden="true" /><h3>Roster sim, meet the web</h3><p>The C++ original stays available as source while a future browser edition explores WebAssembly or a focused JavaScript port.</p></article>
          <article><span>ALWAYS IN PROGRESS</span><Sparkles aria-hidden="true" /><h3>More useful play</h3><p>New ideas live at the intersection of games and learning: small, approachable projects that make a technical idea feel tangible.</p></article>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-stamp" aria-hidden="true"><span>MADE WITH</span><strong>♥</strong><span>IN MINNESOTA</span></div>
        <div className="about-copy">
          <p className="section-number">03 / BEHIND THE PIXELS</p><h2>Hi, I’m Victory.</h2>
          <p className="about-lede">Pixel Penguin is my shelf of student projects, game experiments, and playful tools. I like building things that are charming enough to invite you in—and helpful enough to leave you with something new.</p>
          <div className="values">
            <div><Gamepad2 aria-hidden="true" /><span><strong>Playful</strong>Learning works better when it feels like discovery.</span></div>
            <div><BookOpen aria-hidden="true" /><span><strong>Open</strong>Source and guides are available for curious builders.</span></div>
            <div><Heart aria-hidden="true" /><span><strong>Human</strong>Rough edges are part of learning in public.</span></div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><span aria-hidden="true">🐧</span><div><strong>PIXEL PENGUIN</strong><small>Charming games & useful experiments.</small></div></div>
        <div className="footer-links"><a href="#games">Games</a><a href="#workshop">Workshop</a><a href="#about">About</a><a href="https://github.com/VictoryMa8" target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true" size={13} /></a></div>
        <p><TerminalSquare aria-hidden="true" size={14} /> Built one pixel at a time in Minnesota.</p>
      </footer>
    </main>
  );
}
