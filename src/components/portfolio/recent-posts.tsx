
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Rss, ArrowUpRight } from "lucide-react";

type Post = {
  title: string;
  date: string;
  content: string;
  url: string;
  hashtags: string[];
};

type RecentPostsProps = {
  posts: Post[];
};

export function RecentPosts({ posts }: RecentPostsProps) {
    if (!posts || posts.length === 0) {
        return null;
    }

  return (
    <section id="recent-posts" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Recent Posts
          </h2>
          <p className="mt-3 max-w-[700px] text-foreground/80 md:text-lg">
            A few of my latest posts and activities on LinkedIn.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.slice(0,4).map((post, index) => (
            <Card key={index} className="flex flex-col border-border/60 hover:border-primary/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="font-headline text-xl">{post.title}</CardTitle>
                    <CardDescription>{post.date}</CardDescription>
                  </div>
                  <Rss className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-foreground/80 mb-4">{post.content}</p>
                <div className="flex flex-wrap gap-2">
                  {post.hashtags.slice(0, 5).map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <a href={post.url} target="_blank" rel="noopener noreferrer">
                    View Post <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
