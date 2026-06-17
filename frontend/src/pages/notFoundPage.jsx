import { Link } from "react-router-dom";

export default function NotFoundPage() {
	return (
		<div className="w-full h-full flex items-center justify-center px-6">
			<div className="max-w-md text-center">
				<p className="text-sm font-semibold tracking-[0.3em] text-accent uppercase">
					404
				</p>
				<h1 className="mt-4 text-4xl font-bold text-gray-900">
					Page not found
				</h1>
				<p className="mt-3 text-gray-600">
					The page you're looking for doesn't exist or was moved.
				</p>
				<Link
					to="/"
					className="mt-8 inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-white transition-colors duration-200 hover:bg-primary-dark"
				>
					Go home
				</Link>
			</div>
		</div>
	);
}
