import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		domains: ["i.pravatar.cc"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "picsum.photos",
			},
		],
	},
	/* config options here */
	reactCompiler: true,
};

export default nextConfig;
