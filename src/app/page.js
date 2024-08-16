import AppNavbar from '@/components/Navbar';
import MovieList from '@/components/MovieList';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppNavbar />
      <main className="flex-1 p-20 bg-white-900">
        <MovieList />
      </main>
    </div>
  );
}

