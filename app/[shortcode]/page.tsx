import prisma from "@/lib/db";
import { redirect } from "next/navigation";  // Import the redirect function
import Error404 from "@/components/error404";
interface RedirectPageProps {
  params: { shortcode: string };
}

export default async function RedirectPage({ params }: RedirectPageProps) {
  const { shortcode } = params;

  const url = await prisma.url.findUnique({
    where: { shortCode: shortcode },
  });

  if (!url) {
    return <Error404/>;
  }
 await prisma.url.update({
    where : {
        id : url.id,
    },
    data: {visits: {increment: 1} },
 });

  redirect(url.originalUrl);
}
