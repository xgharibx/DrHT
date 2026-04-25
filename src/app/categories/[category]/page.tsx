'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { categories } from '@/data/categories';
import { getMiraclesByCategory } from '@/data/miracles';
import MiracleCard from '@/components/ui/MiracleCard';
import { MiracleCategory } from '@/types';

const CosmosScene = dynamic(() => import('@/components/three/CosmosScene'), { ssr: false });
const MicroscopicScene = dynamic(() => import('@/components/three/MicroscopicScene'), { ssr: false });

interface PageProps {
  params: { category: string };
}

export default function CategoryPage({ params }: PageProps) {
  const category = categories.find((c) => c.id === params.category);

  if (!category) {
    notFound();
  }

  const miraclesList = getMiraclesByCategory(category.id);

  const SceneComponent =
    category.sceneType === 'cosmos'
      ? CosmosScene
      : category.sceneType === 'microscopic'
        ? MicroscopicScene
        : null;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        {SceneComponent && (
          <div className="absolute inset-0 z-0">
            <SceneComponent />
          </div>
        )}
        {!SceneComponent && (
          <div
            className="absolute inset-0 z-0"
            style={{
              background: `radial-gradient(ellipse at center, ${category.color}15 0%, transparent 70%), linear-gradient(to bottom, #0a0a0f, #0d1117)`,
            }}
          />
        )}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-vanta via-vanta/60 to-transparent" />

        <div className="relative z-10 container mx-auto px-6 pb-12">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-sm font-tajawal text-text-muted mb-4"
          >
            <Link href="/" className="hover:text-gold-primary transition-colors">الرئيسية</Link>
            <span>/</span>
            <Link href="/miracles" className="hover:text-gold-primary transition-colors">المعجزات</Link>
            <span>/</span>
            <span className="text-gold-primary">{category.nameAr}</span>
          </motion.nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div
              className="inline-flex items-center gap-3 px-4 py-2 rounded-xl mb-4"
              style={{ background: `${category.color}15`, border: `1px solid ${category.color}30` }}
            >
              <span className="text-3xl">{category.icon}</span>
              <div>
                <h1 className="font-amiri text-3xl md:text-4xl font-bold" style={{ color: category.color }}>
                  {category.nameAr}
                </h1>
                <p className="text-text-muted text-sm font-tajawal">{category.name}</p>
              </div>
            </div>
            <p className="text-text-secondary font-tajawal text-base max-w-2xl">
              {category.descriptionAr}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Miracles List */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <p className="text-text-muted text-sm font-tajawal mb-8">
            {miraclesList.length} معجزة في هذا القسم
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {miraclesList.map((miracle, i) => (
              <MiracleCard key={miracle.id} miracle={miracle} index={i} />
            ))}
          </div>

          {miraclesList.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-muted font-tajawal text-lg">لا توجد معجزات في هذا القسم بعد</p>
            </div>
          )}

          {/* Back Link */}
          <div className="text-center mt-12">
            <Link
              href="/miracles"
              className="inline-flex items-center gap-2 text-gold-primary font-tajawal hover:text-gold-light transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m15 18-6-6 6-6" />
              </svg>
              العودة لجميع المعجزات
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
