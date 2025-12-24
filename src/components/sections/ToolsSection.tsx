import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Check, ArrowRightLeft, Hash, Link2, FileJson } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const tools = [
  { id: "base64", label: "Base64", icon: ArrowRightLeft },
  { id: "url", label: "URL Encode", icon: Link2 },
  { id: "json", label: "JSON Format", icon: FileJson },
  { id: "hash", label: "Hash Generator", icon: Hash },
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
          // Simple hash for demo - in production use crypto API
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
    <section id="tools" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Developer Tools</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Free utilities for everyday development tasks
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {tools.map((tool) => (
                <TabsTrigger key={tool.id} value={tool.id} className="gap-2">
                  <tool.icon size={16} />
                  <span className="hidden sm:inline">{tool.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {tools.map((tool) => (
              <TabsContent key={tool.id} value={tool.id} className="space-y-4">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <label className="block text-sm font-medium mb-2">Input</label>
                  <Textarea
                    placeholder={
                      tool.id === "json"
                        ? '{"key": "value"}'
                        : "Enter text to encode/decode..."
                    }
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="min-h-[120px] font-mono text-sm resize-none"
                  />

                  <div className="flex flex-wrap gap-3 mt-4">
                    <Button onClick={handleEncode}>
                      {tool.id === "json" ? "Format" : tool.id === "hash" ? "Generate" : "Encode"}
                    </Button>
                    {tool.id !== "hash" && tool.id !== "json" && (
                      <Button variant="outline" onClick={handleDecode}>
                        Decode
                      </Button>
                    )}
                    {tool.id === "json" && (
                      <Button variant="outline" onClick={handleDecode}>
                        Minify
                      </Button>
                    )}
                  </div>
                </div>

                {output && (
                  <div className="p-6 rounded-xl bg-card border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-medium">Output</label>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={copyToClipboard}
                        className="gap-2"
                      >
                        {copied ? <Check size={14} /> : <Copy size={14} />}
                        {copied ? "Copied" : "Copy"}
                      </Button>
                    </div>
                    <div className="p-4 rounded-lg bg-secondary font-mono text-sm break-all whitespace-pre-wrap max-h-[200px] overflow-auto">
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
