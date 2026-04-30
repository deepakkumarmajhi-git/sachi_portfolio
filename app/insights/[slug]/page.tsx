import { notFound } from "next/navigation";
import { getInsightBySlug, insights } from "@/lib/insights";
import { InsightPost } from "@/components/ui/InsightPost";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) return { title: "Insight Not Found" };
  return {
    title: `${insight.title} — Sachidananda Pattnaik`,
    description: insight.excerpt,
  };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) notFound();
  return <InsightPost insight={insight} />;
}
