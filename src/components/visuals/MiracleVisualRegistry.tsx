'use client';

import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

export interface MiracleVisualProps {
  className?: string;
}

// Dynamic imports for each individual miracle visual — code-split per miracle
const visualMap: Record<string, ComponentType<MiracleVisualProps>> = {
  // ═══ COSMOLOGICAL ═══
  'miracle-universe-expansion': dynamic(() => import('./cosmos/UniverseExpansionVisual'), { ssr: false }),
  'miracle-big-bang': dynamic(() => import('./cosmos/BigBangVisual'), { ssr: false }),
  'miracle-orbits': dynamic(() => import('./cosmos/CelestialOrbitsVisual'), { ssr: false }),
  'miracle-pulsars': dynamic(() => import('./cosmos/PulsarVisual'), { ssr: false }),
  'miracle-fine-tuning': dynamic(() => import('./cosmos/FineTuningVisual'), { ssr: false }),
  'miracle-iron-sent-down': dynamic(() => import('./cosmos/IronSentDownVisual'), { ssr: false }),
  'miracle-solar-apex': dynamic(() => import('./cosmos/SolarApexVisual'), { ssr: false }),
  'miracle-black-holes': dynamic(() => import('./cosmos/BlackHolesVisual'), { ssr: false }),

  // ═══ BIOLOGICAL ═══
  'miracle-embryology-stages': dynamic(() => import('./bio/EmbryologyVisual'), { ssr: false }),
  'miracle-three-darknesses': dynamic(() => import('./bio/ThreeDarknessesVisual'), { ssr: false }),
  'miracle-life-from-water': dynamic(() => import('./bio/LifeFromWaterVisual'), { ssr: false }),
  'miracle-honey-healing': dynamic(() => import('./bio/HoneyHealingVisual'), { ssr: false }),
  'miracle-milk-production': dynamic(() => import('./bio/MilkProductionVisual'), { ssr: false }),
  'miracle-skin-pain-receptors': dynamic(() => import('./bio/SkinPainReceptorsVisual'), { ssr: false }),
  'miracle-fingerprints': dynamic(() => import('./bio/FingerprintsVisual'), { ssr: false }),
  'miracle-wind-pollination': dynamic(() => import('./bio/WindPollinationVisual'), { ssr: false }),
  'miracle-lying-forelock': dynamic(() => import('./bio/LyingForelockVisual'), { ssr: false }),
  'miracle-female-bee': dynamic(() => import('./bio/FemaleBeeVisual'), { ssr: false }),
  'miracle-night-covering': dynamic(() => import('./bio/NightCoveringVisual'), { ssr: false }),

  // ═══ EARTH SCIENCES ═══
  'miracle-mountains-pegs': dynamic(() => import('./earth/MountainsPegsVisual'), { ssr: false }),
  'miracle-deep-sea-darkness': dynamic(() => import('./earth/DeepSeaDarknessVisual'), { ssr: false }),
  'miracle-two-seas-barrier': dynamic(() => import('./earth/TwoSeasBarrierVisual'), { ssr: false }),
  'miracle-earth-shape': dynamic(() => import('./earth/EarthShapeVisual'), { ssr: false }),
  'miracle-clouds-weight': dynamic(() => import('./earth/CloudsWeightVisual'), { ssr: false }),
  'miracle-lowest-point-earth': dynamic(() => import('./earth/LowestPointVisual'), { ssr: false }),
  'miracle-water-cycle': dynamic(() => import('./earth/WaterCycleVisual'), { ssr: false }),

  // ═══ PROPHECY ═══
  'miracle-prophecy-romans': dynamic(() => import('./prophecy/RomansVictoryVisual'), { ssr: false }),
  'miracle-prophecy-torah': dynamic(() => import('./prophecy/ProphecyTorahVisual'), { ssr: false }),
  'miracle-prophecy-bible': dynamic(() => import('./prophecy/ProphecyBibleVisual'), { ssr: false }),
  'miracle-unlettered-prophet': dynamic(() => import('./prophecy/UnletteredProphetVisual'), { ssr: false }),
  'miracle-prophecy-makkah': dynamic(() => import('./prophecy/ConquestMakkahVisual'), { ssr: false }),
  'miracle-prophecy-badr': dynamic(() => import('./prophecy/BattleBadrVisual'), { ssr: false }),
  'miracle-pharaoh-body': dynamic(() => import('./prophecy/PharaohBodyVisual'), { ssr: false }),

  // ═══ LOGICAL ═══
  'miracle-kalam-cosmological': dynamic(() => import('./logic/KalamCosmologicalVisual'), { ssr: false }),
  'miracle-contingency': dynamic(() => import('./logic/ContingencyVisual'), { ssr: false }),
  'miracle-design-argument': dynamic(() => import('./logic/DesignArgumentVisual'), { ssr: false }),
  'miracle-morality-argument': dynamic(() => import('./logic/MoralArgumentVisual'), { ssr: false }),
  'miracle-consciousness': dynamic(() => import('./logic/ConsciousnessVisual'), { ssr: false }),
  'miracle-speech-faculty': dynamic(() => import('./logic/SpeechFacultyVisual'), { ssr: false }),
  'miracle-dna-information': dynamic(() => import('./logic/DNAInformationVisual'), { ssr: false }),
  'miracle-prophet-paraclete': dynamic(() => import('./prophecy/ParacleteVisual'), { ssr: false }),
  'miracle-origin-of-life': dynamic(() => import('./logic/OriginOfLifeVisual'), { ssr: false }),
  'miracle-quran-challenge': dynamic(() => import('./logic/QuranChallengeVisual'), { ssr: false }),
  'miracle-prophet-isaiah': dynamic(() => import('./prophecy/IsaiahProphecyVisual'), { ssr: false }),
  'miracle-quran-word-balance': dynamic(() => import('./logic/QuranWordBalanceVisual'), { ssr: false }),
  // Phase 4 — Orders 46–50
  'miracle-subatomic-quran': dynamic(() => import('./cosmos/SubatomicQuranVisual'), { ssr: false }),
  'miracle-cloud-formation': dynamic(() => import('./earth/CloudFormationVisual'), { ssr: false }),
  'miracle-ant-communication': dynamic(() => import('./bio/AntCommunicationVisual'), { ssr: false }),
  'miracle-universe-fate': dynamic(() => import('./cosmos/UniverseFateVisual'), { ssr: false }),
  'miracle-heart-neuroscience': dynamic(() => import('./bio/HeartNeuroscienceVisual'), { ssr: false }),
  // Phase 5 — Orders 51–55
  'miracle-embryo-mudghah': dynamic(() => import('./bio/EmbryoMudghahVisual'), { ssr: false }),
  'miracle-pulsar-stars': dynamic(() => import('./cosmos/PulsarStarsVisual'), { ssr: false }),
  'miracle-atmosphere-ceiling': dynamic(() => import('./earth/AtmosphereCeilingVisual'), { ssr: false }),
  'miracle-water-origin-life': dynamic(() => import('./bio/WaterOriginLifeVisual'), { ssr: false }),
  'miracle-roman-lowest-land': dynamic(() => import('./earth/RomanLowestLandVisual'), { ssr: false }),
  // Phase 6 — Orders 56–60
  'miracle-sleep-neuroscience': dynamic(() => import('./bio/SleepNeuroscienceVisual'), { ssr: false }),
  'miracle-mountains-stability': dynamic(() => import('./earth/MountainsStabilityVisual'), { ssr: false }),
  'miracle-stars-navigation': dynamic(() => import('./cosmos/StarsNavigationVisual'), { ssr: false }),
  'miracle-honey-antibacterial': dynamic(() => import('./bio/HoneyAntibacterialVisual'), { ssr: false }),
  'miracle-cosmic-web': dynamic(() => import('./cosmos/CosmicWebVisual'), { ssr: false }),
  // Phase 7 — Orders 61–65
  'miracle-iron-from-stars': dynamic(() => import('./cosmos/IronFromStarsVisual'), { ssr: false }),
  'miracle-barriers-between-seas': dynamic(() => import('./earth/BarriersBetweenSeasVisual'), { ssr: false }),
  'miracle-embryo-bones-flesh': dynamic(() => import('./bio/EmbryoBonesFieshVisual'), { ssr: false }),
  'miracle-night-day-coiling': dynamic(() => import('./cosmos/NightDayCoilingVisual'), { ssr: false }),
  'miracle-water-cycle-quran': dynamic(() => import('./earth/HydrologicalCycleQuranVisual'), { ssr: false }),
  // Phase 8 — Orders 66–70
  'miracle-pain-receptors-skin': dynamic(() => import('./bio/PainReceptorsSkinVisual'), { ssr: false }),
  'miracle-sun-orbital-motion': dynamic(() => import('./cosmos/SunOrbitalMotionVisual'), { ssr: false }),
  'miracle-pairs-creation': dynamic(() => import('./cosmos/PairsCreationVisual'), { ssr: false }),
  'miracle-spider-web-weakness': dynamic(() => import('./bio/SpiderWebWeaknessVisual'), { ssr: false }),
  'miracle-deep-ocean-darkness': dynamic(() => import('./earth/DeepOceanDarknessVisual'), { ssr: false }),
  // Phase 9 — Orders 71–75
  'miracle-quran-number-nineteen': dynamic(() => import('./logic/NumberNineteenVisual'), { ssr: false }),
  'miracle-black-holes-quran': dynamic(() => import('./cosmos/BlackHolesQuranVisual'), { ssr: false }),
  'miracle-earth-rotation-axis': dynamic(() => import('./earth/EarthAxisSeasonsVisual'), { ssr: false }),
  'miracle-human-proportion-ratio': dynamic(() => import('./bio/HumanProportionVisual'), { ssr: false }),
  'miracle-lightning-thunder': dynamic(() => import('./earth/LightningThunderVisual'), { ssr: false }),
  // Phase 10 — Orders 76–80
  'miracle-sun-self-luminous': dynamic(() => import('./cosmos/SunMoonLightVisual'), { ssr: false }),
  'miracle-sex-determination-sperm': dynamic(() => import('./bio/SexDeterminationVisual'), { ssr: false }),
  'miracle-quran-preservation-hafiz': dynamic(() => import('./logic/QuranPreservationVisual'), { ssr: false }),
  'miracle-fig-olive-nutrition': dynamic(() => import('./bio/FigOliveNutritionVisual'), { ssr: false }),
  'miracle-backbone-ribs-sperm': dynamic(() => import('./bio/BackboneRibsSpermVisual'), { ssr: false }),

  // Phase 11 — Orders 81–85
  'miracle-camel-water-storage': dynamic(() => import('./bio/CamelAdaptationVisual'), { ssr: false }),
  'miracle-whale-jonah-biology': dynamic(() => import('./earth/WhaleJonahVisual'), { ssr: false }),
  'miracle-running-water-death': dynamic(() => import('./earth/FlowingWaterVisual'), { ssr: false }),
  'miracle-quran-color-vision': dynamic(() => import('./earth/MountainColorsVisual'), { ssr: false }),
  'miracle-photosynthesis-quran': dynamic(() => import('./bio/PhotosynthesisVisual'), { ssr: false }),
};

export function getMiracleVisual(miracleId: string): ComponentType<MiracleVisualProps> | null {
  return visualMap[miracleId] || null;
}

export default function MiracleVisual({ miracleId, className }: { miracleId: string; className?: string }) {
  const VisualComponent = visualMap[miracleId];
  if (!VisualComponent) return null;
  return <VisualComponent className={className} />;
}
