import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { CopyIcon, MousePointerClick, Check } from "lucide-react";
import { motion } from "framer-motion";

type Url = {
  id: string;
  shortCode: string;
  originalUrl: string;
  visits: number;
};

interface UrlListProps {
  urls: Url[];
}

export default function UrlList({ urls }: UrlListProps) {
  const [copied, setCopied] = useState<boolean>(false);
  const [copyUrl, setCopyUrl] = useState<string>("");

  const shortenerUrl = (code: string) => `${process.env.NEXT_PUBLIC_BASE_URL}/${code}`;

  const handleCopyUrl = (code: string) => {
    const fullUrl = `${shortenerUrl(code)}`;
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopyUrl(code);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setCopyUrl("");
      }, 3000);
    });
  };

  return (
    <div className="space-y-4">
      <ul className="space-y-2">
        {urls.map((url) => (
          <motion.li
            key={url.id}
            className="flex items-center gap-2 justify-between bg-card rounded-md text-card-foreground p-3"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
            }}             
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Link href={`${url.shortCode}`} target="_blank" className=" gap-y-1 text-muted-foreground text-xs hover:text-black ">
            {shortenerUrl(url.shortCode)}
            </Link>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={() => handleCopyUrl(url.shortCode)}>
                {copied && copyUrl === url.shortCode ? <Check className="w-4 h-4 " /> : <CopyIcon className="w-4 h-4" />}
                <span className="sr-only">Copy URL</span>
              </Button>
              <span className="flex items-center gap-2 text-xs text-muted-foreground px-4 py-2 rounded-sm bg-[#f9fafb] border" >
                <MousePointerClick className="w-4 h-4" />
                {url.visits} clicks
              </span>
            </div>
          </motion.li>
        ))}
        
      </ul>
      <ul className="space-y-4">
          <motion.li
  className="flex items-center gap-2 justify-between bg-card rounded-md text-card-foreground p-3"
  style={{
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
  }}             initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Link href={""} target="_blank" className="text-muted-foreground text-xs hover:text-black">
            www.cutLite.com
            </Link>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <CopyIcon className="w-4 h-4" />
                <span className="sr-only">Copy URL</span>
              </Button>
              <span className="flex items-center gap-2 text-xs text-muted-foreground px-3 py-2 rounded-sm bg-[#f9fafb] border">
                <MousePointerClick className="w-4 h-4" />
                {"72.100 K"} clicks
              </span>
            </div>
          </motion.li>

        
      </ul>
      
      <div className="flex gap-2 flex-col">
      <ul className="space-y-4">
          <motion.li
  className="flex items-center gap-2 justify-between bg-card rounded-md text-card-foreground p-3"
  style={{
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
  }}            
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Link href={""} target="_blank" className="text-[#e5e7eb] text-xs bg-[#e5e7eb] py-1 px-9 rounded-sm">
            www.cutLite.com
            </Link>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="bg-[#e5e7eb] text-[#e5e7eb]">
                <CopyIcon className="w-4 h-4" />
                <span className="sr-only">Copy URL</span>
              </Button>
              <span className="flex items-center gap-2 text-xs text-[#e5e7eb] px-3 py-2 rounded-sm bg-[#e5e7eb]">
                <MousePointerClick className="w-4 h-4" />
                {"72.100 K"} clicks
              </span>
            </div>
          </motion.li>

        
      </ul>
      <ul className="space-y-4">
          <motion.li
  className="flex items-center gap-2 justify-between bg-card rounded-md text-card-foreground p-3"
  style={{
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
  }}            
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Link href={""} target="_blank" className="text-[#e5e7eb] text-xs bg-[#e5e7eb] py-1 px-9 rounded-sm">
            www.cutLite.com
            </Link>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="bg-[#e5e7eb] text-[#e5e7eb]">
                <CopyIcon className="w-4 h-4" />
                <span className="sr-only">Copy URL</span>
              </Button>
              <span className="flex items-center gap-2 text-xs text-[#e5e7eb] px-3 py-2 rounded-sm bg-[#e5e7eb]">
                <MousePointerClick className="w-4 h-4" />
                {"72.100 K"} clicks
              </span>
            </div>
          </motion.li>

        
      </ul>
      <ul className="space-y-4">
          <motion.li
  className="flex items-center gap-2 justify-between bg-card rounded-md text-card-foreground p-3"
  style={{
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
  }}            
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Link href={""} target="_blank" className="text-[#e5e7eb] text-xs bg-[#e5e7eb] py-1 px-9 rounded-sm">
            www.cutLite.com
            </Link>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="bg-[#e5e7eb] text-[#e5e7eb]">
                <CopyIcon className="w-4 h-4" />
                <span className="sr-only">Copy URL</span>
              </Button>
              <span className="flex items-center gap-2 text-xs text-[#e5e7eb] px-3 py-2 rounded-sm bg-[#e5e7eb]">
                <MousePointerClick className="w-4 h-4" />
                {"72.100 K"} clicks
              </span>
            </div>
          </motion.li>

        
      </ul>

      </div>
      <p className="flex justify-center items-center text-xs text-[#73838f]">CutLite offers instant, free URL shortening fast, simple, and completely free.</p>
    </div>
  );
}
