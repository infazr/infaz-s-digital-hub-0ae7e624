import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Check, ArrowRightLeft, Hash, Link2, FileJson } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const tools = [
  { id: "base64", label: "Base64", icon: ArrowRightLeft },
  { id: "url", label: "URL", icon: Link2 },
  { id: "json", label: "JSON", icon: FileJson },
  { id: "hash", label: "Hash", icon: Hash },
];

export const ToolsSection = () => {
  const { toast } = useToast();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("base64");

  const handleEncode = () => {
    try {
      let result = "";
      switch (activeTab) {
        case "base64":
          result = btoa(unescape(encodeURIComponent(input)));
          break;
        case "url":
          result = encodeURIComponent(input);
          break;
        case "json":
          result = JSON.stringify(JSON.parse(input), null, 2);
          break;
        case "hash":
          result = Array.from(input)
            .reduce((hash, char) => ((hash << 5) - hash + char.charCodeAt(0)) | 0, 0)
            .toString(16);
          break;
      }
      setOutput(result);
    } catch (e) {
      toast({
        title: "Error",
        description: "Invalid input for this operation",
        variant: "destructive",
      });
    }
  };

  const handleDecode = () => {
    try {
      let result = "";
      switch (activeTab) {
        case "base64":
          result = decodeURIComponent(escape(atob(input)));
          break;
        case "url":
          result = decodeURIComponent(input);
          break;
        case "json":
          result = JSON.stringify(JSON.parse(input));
          break;
        case "hash":
          toast({
            title: "Info",
            description: "Hash functions are one-way and cannot be decoded",
          });
          return;
      }
      setOutput(result);
    } catch (e) {
      toast({
        title: "Error",
        description: "Invalid input for decoding",
        variant: "destructive",
      });
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    toast({ title: "Copied to clipboard!" });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setInput("");
    setOutput("");
  };

  return (
    <section id="tools" className="py-16 sm:py-24">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Developer Tools</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Free utilities for everyday development tasks
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6 sm:mb-8 h-auto">
              {tools.map((tool) => (
                <TabsTrigger 
                  key={tool.id} 
                  value={tool.id} 
                  className="gap-1.5 sm:gap-2 py-2 sm:py-2.5 text-xs sm:text-sm"
                >
                  <tool.icon size={14} className="sm:w-4 sm:h-4" />
                  <span>{tool.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {tools.map((tool) => (
              <TabsContent key={tool.id} value={tool.id} className="space-y-3 sm:space-y-4">
                <div className="p-4 sm:p-6 rounded-xl bg-card border border-border">
                  <label className="block text-sm font-medium mb-2">Input</label>
                  <Textarea
                    placeholder={
                      tool.id === "json"
                        ? '{"key": "value"}'
                        : "Enter text to encode/decode..."
                    }
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="min-h-[100px] sm:min-h-[120px] font-mono text-xs sm:text-sm resize-none"
                  />

                  <div className="flex flex-wrap gap-2 sm:gap-3 mt-3 sm:mt-4">
                    <Button onClick={handleEncode} size="sm" className="text-xs sm:text-sm">
                      {tool.id === "json" ? "Format" : tool.id === "hash" ? "Generate" : "Encode"}
                    </Button>
                    {tool.id !== "hash" && tool.id !== "json" && (
                      <Button variant="outline" onClick={handleDecode} size="sm" className="text-xs sm:text-sm">
                        Decode
                      </Button>
                    )}
                    {tool.id === "json" && (
                      <Button variant="outline" onClick={handleDecode} size="sm" className="text-xs sm:text-sm">
                        Minify
                      </Button>
                    )}
                  </div>
                </div>

                {output && (
                  <div className="p-4 sm:p-6 rounded-xl bg-card border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-medium">Output</label>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={copyToClipboard}
                        className="gap-1.5 sm:gap-2 h-8 text-xs sm:text-sm"
                      >
                        {copied ? <Check size={12} /> : <Copy size={12} />}
                        {copied ? "Copied" : "Copy"}
                      </Button>
                    </div>
                    <div className="p-3 sm:p-4 rounded-lg bg-secondary font-mono text-xs sm:text-sm break-all whitespace-pre-wrap max-h-[150px] sm:max-h-[200px] overflow-auto">
                      {output}
                    </div>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};
