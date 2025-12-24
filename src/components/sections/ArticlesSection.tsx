import { ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import postgresqlImage from "@/assets/articles/postgresql-indexes.webp";
import restGrpcImage from "@/assets/articles/rest-grpc.png";
import redisImage from "@/assets/articles/redis-dotnet.png";
import dockerImage from "@/assets/articles/docker-dotnet.webp";

const articles = [
  {
    title: "Indexes Don't Always Save You: A 20 Million Row Experiment in PostgreSQL",
    image: postgresqlImage,
    url: "https://medium.com/dev-genius/indexes-dont-always-save-you-a-20-million-row-experiment-in-postgresql-eab4f6de2b1b",
  },
  {
    title: "Little experiment between REST and gRPC",
    image: restGrpcImage,
    url: "https://medium.com/dev-genius/little-experiment-between-rest-and-grcp-8f48a2370d07",
  },
  {
    title: "Using Redis with .NET: A Beginner's Guide",
    image: redisImage,
    url: "https://medium.com/dev-genius/using-redis-with-net-a-beginners-guide-89b6c3c18dd4",
  },
  {
    title: "Containerizing .NET Core + PostgreSQL using Docker and Docker Compose",
    image: dockerImage,
    url: "https://medium.com/dev-genius/containerizing-net-core-postgresql-application-using-docker-and-docker-compose-af06831568a5",
  },
];

export const ArticlesSection = () => {
  return (
    <section id="articles" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Articles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I write about software engineering, databases, and backend technologies
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {articles.map((article) => (
            <a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl bg-card border border-border overflow-hidden card-hover"
            >
              <div className="aspect-video overflow-hidden bg-secondary">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-sm leading-snug line-clamp-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  <span>Read on Medium</span>
                  <ExternalLink size={12} />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://infazrumy.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <BookOpen size={18} />
              View All Articles on Medium
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
