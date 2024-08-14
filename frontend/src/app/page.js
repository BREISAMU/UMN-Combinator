import Header from './components/header';
import ItemList from './components/posts';

export default function Home() {
  return (
    <main>
      <Header />
      <div className='bg-gen min-h-screen'>
        <h1>Posts</h1>
        <ItemList />
      </div>
    </main>
  );
}
