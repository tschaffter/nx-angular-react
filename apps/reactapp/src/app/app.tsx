import styles from './app.module.scss';

export function App() {
  const title = 'reactapp';
  return (
    <div className={styles.app}>
      <main>
        <div>
          <div style={{ textAlign: 'center' }}>
            <ui-greeting title={title} />

            <img
              width="300"
              src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
            />
          </div>

          <p>
            This is a React app built with <a href="https://nx.dev">Nx</a>.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
