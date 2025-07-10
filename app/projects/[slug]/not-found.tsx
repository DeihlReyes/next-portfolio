import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-hero text-gray-900">Project Not Found</h1>
          <p className="text-xl text-gray-600 max-w-md mx-auto">
            Sorry, the project you&apos;re looking for doesn&apos;t exist or has
            been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link href="/#projects">
            <Button className="flex items-center gap-2">
              <ArrowLeft size={20} />
              Back to Projects
            </Button>
          </Link>

          <p className="text-lg text-gray-500">
            <Link href="/" className="hover:text-gray-700 transition-colors">
              Or return to homepage
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
