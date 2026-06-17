export default function LandingPage() {
    return (
        <div className="w-full h-full relative overflow-hidden">
            <div
                className="absolute inset-0 bg-center bg-cover scale-110 blur-sm"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1550691565-5044e46a12fb?auto=format&fit=crop&w=1600&q=80')",
                }}
            />
            <div className="absolute inset-0 bg-slate-950/60" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">Welcome to iComputers Store!</h1>
                <p className="text-lg md:text-2xl text-gray-200 mb-8 drop-shadow-md">Your one-stop shop for all your computer needs.</p>
                <a href="/products" className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark transition duration-300">Shop Now</a>
            </div>
        </div>
    )
}
