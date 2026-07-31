/** @type {import('next').NextConfig} */
const nextConfig = {
	// Stable in Next.js 16. Runs via babel-plugin-react-compiler, which Next.js
	// applies only to files containing JSX/hooks, so build cost stays contained.
	reactCompiler: true,
};

export default nextConfig;
