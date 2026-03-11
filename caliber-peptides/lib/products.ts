export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  /** One line shown below name on catalog card; if omitted, category is used */
  catalogSubtitle?: string;
  purity: number;
  price: number;
  form: string;
  image: string;
  description: string;
  specs?: string;
  overview?: string;
  researchEffects?: string[];
  researchFindings?: Array<{
    title: string;
    protocol: string;
    effects: string;
    citation: string;
    citationUrl?: string;
  }>;
  faq?: Array<{
    question: string;
    answer: string;
  }>;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Tesamorelin',
    slug: 'tesamorelin',
    category: 'GHRH',
    catalogSubtitle: 'TH9507',
    purity: 99.2,
    price: 64.99,
    form: 'Lyophilized Powder',
    image: '/images/tesamorelin.jpg',
    description: 'Growth hormone-releasing hormone analog.',
    specs: '3mL vial',
    overview: 'Tesamorelin works by triggering the body\'s own growth hormone production at the source, rather than introducing growth hormone from the outside. It does this through a key structural modification that makes it far more resistant to enzymatic breakdown than the body\'s natural signal, resulting in a stronger and more sustained response.',
    researchEffects: [
      'Theorized to stimulate pulsatile growth hormone release by binding to GHRH receptors on pituitary somatotroph cells, activating GH synthesis and secretion through the body\'s own regulatory pathway rather than introducing GH directly',
      'Research suggests GH elevation subsequently increases IGF-1 levels, with IGF-1 shown to increase progressively over multiple administrations and reaching a ratio of approximately 2.14 times baseline by day 14 at the 2mg protocol',
      'Studies consistently observe selective reduction of visceral adipose tissue, the metabolically active fat surrounding internal organs, with subcutaneous fat remaining relatively unchanged',
      'Phase 3 trial data observed a 19.6% reduction in visceral adipose tissue versus placebo over 26 weeks at 2mg daily, with concurrent improvements in triglycerides and cholesterol to HDL ratio',
      'Research in non-HIV populations suggests benefits to liver fat content, with one 6-month controlled study observing a 2.0% absolute reduction in liver fat versus a 0.9% increase in the placebo group',
      'Areas of active research include visceral adiposity, metabolic dysfunction-associated steatotic liver disease, insulin resistance, and cardiovascular risk reduction',
    ],
    researchFindings: [
      {
        title: 'Preclinical Pharmacokinetic and Stability Study in Rats, Dogs, and Pigs',
        protocol: 'Preclinical comparative study in rats, dogs, and pigs. Tesamorelin administered subcutaneously. GH and IGF-1 plasma levels measured following single and multiple once-daily administrations. DPP-4 resistance assessed in comparison to unmodified GHRH.',
        effects: 'Tesamorelin demonstrated markedly increased resistance to DPP-4 deactivation compared to unmodified GHRH. GH levels were elevated out to 8 hours following subcutaneous administration across all three species. IGF-1 levels increased progressively with once-daily dosing. No adverse findings reported.',
        citation: 'Theratechnologies. Tesamorelin (TH9507) preclinical pharmacology report. Referenced in: Falutz, J., et al. (2010). Growth hormone and tesamorelin in the management of HIV-associated lipodystrophy. HIV/AIDS, 2, 69–79.',
        citationUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3218714/',
      },
      {
        title: 'Phase 3 Randomized Controlled Trial for Visceral Adiposity (LIPO-010)',
        protocol: 'Phase 3 randomized placebo-controlled trial. 412 subjects randomized 2:1 to tesamorelin 2mg or placebo administered by daily subcutaneous injection for 26 weeks. VAT assessed by CT scan at baseline and weeks 13 and 26. Secondary endpoints included triglycerides, cholesterol to HDL ratio, IGF-1, and body image.',
        effects: 'Tesamorelin produced a 19.6% reduction in visceral adipose tissue versus placebo at 26 weeks. Triglyceride levels and cholesterol to HDL ratio improved significantly. IGF-1 increased meaningfully over the study window. Overall glucose tolerance was not worsened. Subjects with and without anti-tesamorelin antibodies showed comparable VAT reductions.',
        citation: 'Falutz, J., et al. (2007). Metabolic effects of a growth hormone-releasing factor in patients with HIV. New England Journal of Medicine, 357(23), 2359–2370.',
        citationUrl: 'https://www.nejm.org/doi/full/10.1056/NEJMoa072375',
      },
      {
        title: 'Controlled Study of Visceral and Liver Fat in Non-HIV Subjects',
        protocol: 'Randomized placebo-controlled study. 50 subjects administered tesamorelin 2mg subcutaneously once daily or placebo for 6 months. Visceral adipose tissue assessed by CT scan. Liver fat content assessed by MR spectroscopy. Measurements taken at baseline and 6 months.',
        effects: 'Visceral adipose tissue decreased by 34 cm2 in the tesamorelin group versus an increase of 8 cm2 in the placebo group. Liver fat content decreased by 2.0% in the tesamorelin group versus an increase of 0.9% in the placebo group. No serious adverse events reported.',
        citation: 'Stanley, T.L., et al. (2014). Effects of tesamorelin on non-alcoholic fatty liver disease in HIV-infected subjects with abdominal fat accumulation. JAMA Internal Medicine, 174(11), 1767–1775. Referenced in Stanley, T.L. et al. (2014). JAMA.',
        citationUrl: 'https://pubmed.ncbi.nlm.nih.gov/24979148/',
      },
    ],
    faq: [
      {
        question: 'Does the product come with handling guidance?',
        answer: 'Each vial is supplied as a lyophilized (freeze-dried) powder and is intended strictly for laboratory research use. Our team is available via text to assist with any technical questions regarding storage, reconstitution supplies, or handling within a research context.',
      },
      {
        question: 'What is the exact quantity in each vial?',
        answer: 'The quantity is clearly labeled on each vial and corresponds to the amount listed on the product page. Every batch is third-party tested and verified for purity, identity, and quantity. A Certificate of Analysis (COA) is available for each lot confirming these specifications.',
      },
      {
        question: 'What additional supplies are needed for research use?',
        answer: 'Depending on the nature of your research, you may require bacteriostatic water for reconstitution, appropriate syringes, and sterile handling equipment. These are standard laboratory consumables and are not included with the vial. Our team can point you in the right direction if needed.',
      },
      {
        question: 'How long does a vial remain stable once received?',
        answer: 'Lyophilized peptide vials should be stored in a cool, dry environment away from direct light. Under proper storage conditions, stability is maintained for an extended period. Refer to the COA for lot-specific stability data. Once reconstituted, the compound should be used within the timeframe appropriate for the specific peptide and storage conditions.',
      },
    ],
  },
  {
    id: '2',
    name: 'Sermorelin',
    slug: 'sermorelin',
    category: 'GHRH',
    catalogSubtitle: 'GHRH (1-29)',
    purity: 99.1,
    price: 54.99,
    form: 'Lyophilized Powder',
    image: '/images/sermorelin.jpg',
    description: 'GHRH (1-29) analog for growth hormone research.',
    specs: '3mL vial',
    overview: 'Sermorelin is a synthetic peptide made up of the first 29 amino acids that bind to GHRH receptors, triggering the body\'s own release of growth hormone. Studies suggest that since subjects\' natural feedback systems remain intact, this peptide may be a more natural way to increase growth hormone versus direct administration.',
    researchEffects: [
      'Studies show sermorelin stimulates growth hormone release in natural pulses without meaningfully affecting cortisol, insulin, prolactin, or other pituitary hormones, suggesting a selective mechanism',
      'Research confirms it raises IGF-1 levels in a dose-responsive manner, with increases observed within two weeks of beginning a protocol',
      'Observed effects across studies include increased lean body mass, improved insulin sensitivity, increased skin thickness, and improvements in general well-being and libido in male subjects',
      'Studies suggest sermorelin supports the feedback systems that regulate growth hormone output, making it difficult to overstimulate the pituitary, unlike direct growth hormone injection',
      'Areas of active research include body composition in aging adults, metabolic health, sleep architecture, and cognitive function',
    ],
    researchFindings: [
      {
        title: 'Reversing Age-Related GH and IGF-1 Decline',
        protocol: 'Clinical study evaluated whether twice-daily GHRH (1-29) injections could restore growth hormone and IGF-1 levels in older men to levels more consistent with younger adults. Older male subjects received twice-daily subcutaneous injections of GHRH (1-29). GH and IGF-1 levels were measured before and after the protocol period.',
        effects: 'Researchers observed that the protocol reversed age-related reductions in both GH and IGF-1, restoring levels toward those typically seen in younger adults. The authors noted this suggested the age-related decline in these hormones may be at least partly reversible through GHRH stimulation.',
        citation: 'Corpas, E., et al. (1992). Journal of Clinical Endocrinology and Metabolism, 75(2), 530-535.',
        citationUrl: 'https://pubmed.ncbi.nlm.nih.gov/1740619/',
      },
      {
        title: 'Body Composition, Skin Thickness, and Quality of Life',
        protocol: 'Single-blind, randomized, placebo-controlled trial examined the endocrine and metabolic effects of a GHRH analog in men and women aged 55-71 over five months. 19 subjects self-administered nightly subcutaneous injections of GHRH-(1-29) at 10 mcg/kg for 16 weeks following a 4-week placebo baseline. Body composition was assessed by DEXA scan. IGF-1, insulin sensitivity, and quality of life markers were measured throughout.',
        effects: 'Researchers reported significant increases in nocturnal GH and IGF-1 in both men and women within two weeks. Male subjects averaged 1.26 kg of lean body mass gained. Skin thickness increased significantly in both sexes. Male subjects also showed improved insulin sensitivity and reported improvements in general well-being and libido. No serious adverse events were noted.',
        citation: 'Khorram, O., et al. (1997). Journal of Clinical Endocrinology and Metabolism, 82(5), 1472-1479.',
        citationUrl: 'https://pubmed.ncbi.nlm.nih.gov/9141219/',
      },
      {
        title: 'IGF-1 Response to Sermorelin Protocol - Retrospective Review',
        protocol: 'Retrospective review examined the effect of a combined growth hormone secretagogue protocol including sermorelin on IGF-1 levels in male subjects. 14 male subjects meeting strict inclusion criteria received 100 mcg of sermorelin alongside GHRP-2 and GHRP-6 three times daily. Mean protocol duration was 134 days. IGF-1 was the primary measured outcome.',
        effects: 'Researchers observed mean IGF-1 levels rising from 159.5 ng/mL at baseline to 239.0 ng/mL following the protocol, a statistically significant increase (p < 0.0001). The authors concluded that sermorelin produced meaningful IGF-1 stimulation when protocol compliance was maintained.',
        citation: 'Sinha, D.K., et al. (2020). Translational Andrology and Urology.',
        citationUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7108996/',
      },
    ],
    faq: [
      {
        question: 'Does the product come with handling guidance?',
        answer: 'Each vial is supplied as a lyophilized (freeze-dried) powder and is intended strictly for laboratory research use. Our team is available via text to assist with any technical questions regarding storage, reconstitution supplies, or handling within a research context.',
      },
      {
        question: 'What is the exact quantity in each vial?',
        answer: 'The quantity is clearly labeled on each vial and corresponds to the amount listed on the product page. Every batch is third-party tested and verified for purity, identity, and quantity. A Certificate of Analysis (COA) is available for each lot confirming these specifications.',
      },
      {
        question: 'What additional supplies are needed for research use?',
        answer: 'Depending on the nature of your research, you may require bacteriostatic water for reconstitution, appropriate syringes, and sterile handling equipment. These are standard laboratory consumables and are not included with the vial. Our team can point you in the right direction if needed.',
      },
      {
        question: 'How long does a vial remain stable once received?',
        answer: 'Lyophilized peptide vials should be stored in a cool, dry environment away from direct light. Under proper storage conditions, stability is maintained for an extended period. Refer to the COA for lot-specific stability data. Once reconstituted, the compound should be used within the timeframe appropriate for the specific peptide and storage conditions.',
      },
    ],
  },
  {
    id: '3',
    name: 'NAD+',
    slug: 'nad-plus',
    category: 'Cellular Health',
    purity: 99.5,
    price: 79.99,
    form: 'Lyophilized Powder',
    image: '/images/nad-plus.jpg',
    description: 'Coenzyme for energy metabolism and cellular aging research.',
    specs: '750mg',
    overview: 'NAD+ is a coenzyme present in every living cell that plays a central role in energy metabolism, DNA repair, and the regulation of proteins involved in cellular aging. Research indicates that NAD+ levels decline by approximately half between youth and middle age, and that restoring those levels through direct supplementation or precursor administration is theorized to support mitochondrial function, stem cell activity, and systemic metabolic health.',
    researchEffects: [
      'Theorized to serve as a substrate for sirtuin enzymes and PARP proteins, which regulate DNA repair, mitochondrial biogenesis, and cellular stress responses across tissues',
      'Research in aged mice suggests NAD+ repletion via precursor administration can rejuvenate muscle stem cells, delay neural and melanocyte stem cell senescence, and extend lifespan by improving mitochondrial function',
      'Studies indicate that NAD+ levels decline to approximately half of youthful concentrations by middle age, and that this decline parallels reduced mitochondrial efficiency, increased inflammatory signaling, and reduced stem cell function',
      'A single 1,000mg oral dose of NAD+ raised blood NAD+ levels 2.7-fold in subjects in one controlled trial, confirming systemic absorption and conversion',
      'Dose-ranging data in subjects showed NAD+ elevation plateaued at approximately 2-fold above baseline by day 9 across a range of 250 to 1,000mg daily, and a 21-day trial in elderly subjects observed elevated NAD+ alongside significant reductions in inflammatory markers IL-6, IL-5, and IL-2',
      'Areas of active research include metabolic aging, mitochondrial dysfunction, muscle regeneration, inflammatory signaling, and stem cell function',
    ],
    researchFindings: [
      {
        title: 'NAD+ Repletion Study in Aged Mice — Stem Cell Rejuvenation and Lifespan Extension',
        protocol: 'Controlled preclinical study in aged mice and mdx muscular dystrophy model mice. Nicotinamide riboside administered as NAD+ precursor. Muscle stem cell senescence assessed by mitochondrial oxidative respiration, gene expression, and cell cycle withdrawal markers. Neural stem cell and melanocyte stem cell senescence assessed separately. Lifespan tracked across treated and untreated cohorts.',
        effects: 'NAD+ precursor treatment induced the mitochondrial unfolded protein response and synthesis of prohibitin proteins in aged muscle stem cells, reversing functional senescence. Treatment prevented muscle stem cell senescence in the dystrophy model. Neural stem cell and melanocyte stem cell senescence were delayed. Treated mice demonstrated extended lifespan compared to untreated controls. Results were consistent with NAD+ availability functioning as a pivotal switch controlling stem cell aging through mitochondrial activity. No adverse findings reported.',
        citation: 'Zhang, H., et al. (2016). NAD+ repletion improves mitochondrial and stem cell function and enhances life span in mice. Science, 352(6292), 1436–1443.',
        citationUrl: 'https://doi.org/10.1126/science.aaf2693',
      },
      {
        title: '12-Month NMN Supplementation Study in Aging Mice',
        protocol: 'Controlled 12-month preclinical study in mice. Three groups: control, NMN 100mg/kg daily in drinking water, and NMN 300mg/kg daily in drinking water for 12 months beginning at 5 months of age. NAD+ tracer studies confirmed direct conversion to NAD+ in liver and skeletal muscle within minutes. Endpoints included body weight, energy expenditure, oxygen consumption, fasting insulin, and physical activity.',
        effects: 'NMN was absorbed rapidly and converted directly to NAD+ in liver and skeletal muscle within 15 to 30 minutes of oral administration. NMN-treated mice gained less body weight during aging despite consuming more food and water than controls. Energy metabolism and oxygen consumption were preserved closer to younger baseline levels compared to controls. Insulin sensitivity was improved. Physical activity was better maintained. The 100mg/kg group tended to show more favorable physical activity outcomes than the 300mg/kg group, suggesting a ceiling on dose-dependent benefit. No serious adverse findings reported.',
        citation: 'Mills, K.F., et al. (2016). Long-Term Administration of Nicotinamide Mononucleotide Mitigates Age-Associated Physiological Decline in Mice. Cell Metabolism, 24(6), 795–806.',
        citationUrl: 'https://doi.org/10.1016/j.cmet.2016.09.013',
      },
      {
        title: 'Single-Dose Oral NAD+ Pharmacokinetics Trial',
        protocol: 'Controlled pharmacokinetics trial. Subjects received a single oral 1,000mg dose of NAD+. Blood NAD+ levels measured at defined intervals following administration.',
        effects: 'A single 1,000mg oral dose raised blood NAD+ levels 2.7-fold above baseline, confirming systemic absorption and conversion following oral administration. No serious adverse findings reported.',
        citation: 'Trammell, S.A., et al. (2016). Nicotinamide riboside is uniquely and orally bioavailable in healthy volunteers. Nature Communications, 7, 12948.',
        citationUrl: 'https://doi.org/10.1038/ncomms12948',
      },
      {
        title: 'Dose-Ranging Trial — Blood NAD+ Plateau and Ceiling Signal',
        protocol: 'Controlled dose-ranging trial. 140 subjects administered oral NAD+ precursor at doses ranging from 250 to 1,000mg daily. Blood NAD+ levels monitored across dose groups over the dosing period.',
        effects: 'Blood NAD+ levels increased consistently across all dose groups. Elevations plateaued at approximately 2-fold above baseline by day 9 across the dose range, with no proportional further increase at higher doses beyond that threshold. The plateau represented a ceiling on acute blood level response regardless of dose within the tested range. No serious adverse findings reported.',
        citation: 'Airhart, S.E., et al. (2017). An open-label, non-randomized study of the pharmacokinetics of the nutritional supplement nicotinamide riboside (NR) and its effects on blood NAD+ levels in healthy volunteers. PLOS ONE, 12(12), e0186459.',
        citationUrl: 'https://doi.org/10.1371/journal.pone.0186459',
      },
      {
        title: '21-Day Trial in Elderly Subjects — Muscle and Blood NAD+ Elevation with Inflammatory Marker Reduction',
        protocol: 'Controlled 21-day trial. 12 elderly male subjects administered 1,000mg oral NAD+ precursor daily for 21 days. NAD+ levels measured in whole blood and skeletal muscle biopsy samples. Circulating inflammatory markers IL-6, IL-5, and IL-2 measured at baseline and end of treatment.',
        effects: 'NAD+ levels were elevated in both blood and skeletal muscle following 21 days of supplementation, confirming that orally administered NAD+ precursor reaches and elevates tissue NAD+ in aged muscle. Circulating IL-6, IL-5, and IL-2 were each reduced by 50 to 70% compared to baseline. No serious adverse findings reported.',
        citation: 'Elhassan, Y.S., et al. (2019). Nicotinamide riboside augments the aged human skeletal muscle NAD+ metabolome and induces transcriptomic and anti-inflammatory signatures. Cell Reports, 28(7), 1717–1728.',
        citationUrl: 'https://doi.org/10.1016/j.celrep.2019.07.043',
      },
    ],
    faq: [
      {
        question: 'Does the product come with handling guidance?',
        answer: 'Each vial is supplied as a lyophilized (freeze-dried) powder and is intended strictly for laboratory research use. Our team is available via text to assist with any technical questions regarding storage, reconstitution supplies, or handling within a research context.',
      },
      {
        question: 'What is the exact quantity in each vial?',
        answer: 'The quantity is clearly labeled on each vial and corresponds to the amount listed on the product page. Every batch is third-party tested and verified for purity, identity, and quantity. A Certificate of Analysis (COA) is available for each lot confirming these specifications.',
      },
      {
        question: 'What additional supplies are needed for research use?',
        answer: 'Depending on the nature of your research, you may require bacteriostatic water for reconstitution, appropriate syringes, and sterile handling equipment. These are standard laboratory consumables and are not included with the vial. Our team can point you in the right direction if needed.',
      },
      {
        question: 'How long does a vial remain stable once received?',
        answer: 'Lyophilized peptide vials should be stored in a cool, dry environment away from direct light. Under proper storage conditions, stability is maintained for an extended period. Refer to the COA for lot-specific stability data. Once reconstituted, the compound should be used within the timeframe appropriate for the specific peptide and storage conditions.',
      },
    ],
  },
  {
    id: '4',
    name: 'GLOW',
    slug: 'glow',
    category: 'Specialty Blends',
    catalogSubtitle: 'BPC-157 + TB-500 + GHK-CU Blend',
    purity: 99.0,
    price: 89.99,
    form: 'Lyophilized Powder',
    image: '/images/glow.jpg',
    description: 'Three-compound blend for tissue repair and regeneration research.',
    specs: '70mg - BPC157 10mg + TB-500 10mg + GHK-Cu 50mg',
    overview: 'GLOW is a three-compound blend of BPC-157, TB-500, and GHK-Cu. Each compound is theorized to have positive effects on tissue repair, collagen remodeling, and cellular regeneration. It is suggested that when combined, they address the repair process more effectively and holistically, resulting in major interest from researchers.',
    researchEffects: [
      'BPC-157 and TB-500 are both theorized to support new blood vessel formation at injury sites through separate signaling pathways, improving oxygen and nutrient delivery to tissue undergoing repair',
      'Research suggests TB-500 directs repair cells including fibroblasts and keratinocytes toward damaged tissue, while BPC-157 has been observed to increase growth hormone receptor expression on those same cells, potentially amplifying their response once they arrive',
      'GHK-Cu is theorized to simultaneously stimulate new collagen production while clearing damaged collagen, improving tissue quality rather than simply adding volume',
      'All three compounds have demonstrated independent anti-inflammatory activity in research models, with observed reductions in TNF-α and IL-6 while preserving the early-stage inflammatory response tissue repair requires',
      'Areas of active research include musculoskeletal recovery, dermal wound healing, ocular surface repair, and broader tissue regeneration across skin, hair, and connective tissue',
    ],
    researchFindings: [
      {
        title: 'Tendon Healing and Fibroblast Activity - BPC-157',
        protocol: 'Controlled study evaluated how BPC-157 affects tendon repair cells in both tissue cultures and migration models. Rat Achilles tendon explants were cultured with and without BPC-157. Cell survival was tested under stress conditions and fibroblast migration was measured via transwell assay.',
        effects: 'BPC-157 significantly accelerated tendon outgrowth and increased cell survival under stress. Fibroblast migration increased in a dose-dependent manner, with the FAK-paxillin pathway identified as the likely mechanism driving cell movement.',
        citation: 'Tsai, W.C., et al. (2010). Journal of Applied Physiology, 110(3), 774-780.',
        citationUrl: 'https://pubmed.ncbi.nlm.nih.gov/21030672/',
      },
      {
        title: 'Pilot Study - BPC-157 Intraarticular Injection for Chronic Knee Pain',
        protocol: 'A systematic review of 36 studies identified one human pilot study involving subjects with chronic knee pain receiving a single BPC-157 injection directly into the joint. Subjects received a single intraarticular injection and were followed for over six months.',
        effects: '7 of 12 subjects reported meaningful relief lasting over six months from a single injection. Preclinical data confirmed no toxic or lethal dose was identified across a wide protocol range, with no adverse findings across multiple organ systems.',
        citation: 'Vasireddi, N., et al. (2025). Sports Health.',
        citationUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12313605/',
      },
      {
        title: 'Dermal Wound Healing - TB-500 Systematic Review',
        protocol: 'A review evaluated Thymosin Beta-4 across multiple preclinical wound models and two Phase 2 clinical trials, covering normal, steroid-treated, diabetic, and aged tissue. Preclinical models used full-thickness punch wounds in rats and mice. Phase 2 clinical data on stasis and pressure ulcers was also assessed.',
        effects: 'Thymosin Beta-4 accelerated healing across all preclinical models. In the clinical data, subjects who achieved wound closure healed approximately one month faster than controls. Key mechanisms included promotion of cell migration, stem cell mobilization, and inflammation reduction.',
        citation: 'Treadwell, T., et al. (2012). Annals of the New York Academy of Sciences, 1270, 37-44.',
        citationUrl: 'https://pubmed.ncbi.nlm.nih.gov/23050815/',
      },
      {
        title: 'Collagen Production and Skin Remodeling - GHK-Cu Human Clinical Trial',
        protocol: 'A randomized double-blind clinical trial evaluated twice-daily topical GHK-Cu application on facial skin over 8 weeks, alongside lab studies examining collagen and elastin production in human fibroblasts. 40 female subjects aged 40-65 applied GHK-Cu serum twice daily for 8 weeks against two control groups. Lab studies used human dermal fibroblasts incubated with GHK-Cu at varying concentrations.',
        effects: 'All tested concentrations increased collagen and elastin production in fibroblasts. In the clinical arm, subjects showed a 55.8% relative reduction in wrinkle volume compared to controls. GHK-Cu activated proteins that protect existing collagen while simultaneously clearing damaged tissue, pointing to a remodeling effect rather than simply adding volume.',
        citation: 'Badenhorst, T., et al. (2016). Journal of Aging Science, 4, 166.',
        citationUrl: 'https://www.researchgate.net/publication/312416949',
      },
    ],
    faq: [
      {
        question: 'Does the product come with handling guidance?',
        answer: 'Each vial is supplied as a lyophilized (freeze-dried) powder and is intended strictly for laboratory research use. Our team is available via text to assist with any technical questions regarding storage, reconstitution supplies, or handling within a research context.',
      },
      {
        question: 'What is the exact quantity in each vial?',
        answer: 'The quantity is clearly labeled on each vial and corresponds to the amount listed on the product page. Every batch is third-party tested and verified for purity, identity, and quantity. A Certificate of Analysis (COA) is available for each lot confirming these specifications.',
      },
      {
        question: 'What additional supplies are needed for research use?',
        answer: 'Depending on the nature of your research, you may require bacteriostatic water for reconstitution, appropriate syringes, and sterile handling equipment. These are standard laboratory consumables and are not included with the vial. Our team can point you in the right direction if needed.',
      },
      {
        question: 'How long does a vial remain stable once received?',
        answer: 'Lyophilized peptide vials should be stored in a cool, dry environment away from direct light. Under proper storage conditions, stability is maintained for an extended period. Refer to the COA for lot-specific stability data. Once reconstituted, the compound should be used within the timeframe appropriate for the specific peptide and storage conditions.',
      },
    ],
  },
  {
    id: '5',
    name: 'Wolverine',
    slug: 'wolverine',
    category: 'Specialty Blends',
    catalogSubtitle: 'BPC-157 + TB-500 Blend',
    purity: 99.0,
    price: 89.99,
    form: 'Lyophilized Powder',
    image: '/images/wolverine.jpg',
    description: 'Recovery-focused peptide blend for research.',
    specs: '3mL vial',
  },
  {
    id: '6',
    name: 'BPC-157',
    slug: 'bpc-157',
    category: 'BPC Peptides',
    purity: 99.5,
    price: 59.99,
    form: 'Lyophilized Powder',
    image: '/images/bpc157.jpg',
    description: 'Body Protection Compound for research applications.',
    specs: '3mL vial',
  },
  {
    id: '7',
    name: 'Epitalon',
    slug: 'epitalon',
    category: 'Longevity',
    purity: 99.3,
    price: 54.99,
    form: 'Lyophilized Powder',
    image: '/images/epitalon.jpg',
    description: 'Tetrapeptide for longevity and telomere research.',
    specs: '3mL vial',
  },
  {
    id: '8',
    name: 'GHK-Cu',
    slug: 'copper-peptide',
    category: 'Specialty',
    purity: 99.2,
    price: 49.99,
    form: 'Lyophilized Powder',
    image: '/images/copper-peptide.jpg',
    description: 'Copper-binding tripeptide for tissue repair and skin regeneration research.',
    specs: '3mL vial',
    overview: 'GHK-Cu is a naturally occurring copper-binding tripeptide found in plasma, saliva, and urine that declines significantly with age. Research suggests it supports tissue repair and skin regeneration by activating fibroblast activity, stimulating collagen and elastin synthesis, and modulating a broad range of gene expression pathways involved in healing and cellular maintenance.',
    researchEffects: [
      'Theorized to bind copper and deliver it directly to fibroblasts, stimulating synthesis of type I collagen, elastin, glycosaminoglycans, and the small proteoglycan decorin, which together form the structural foundation of healthy connective tissue',
      'Research suggests GHK-Cu modulates both matrix metalloproteinases and their inhibitors, supporting balanced tissue remodeling rather than net degradation or net fibrosis',
      'Studies indicate GHK-Cu attracts immune and endothelial cells to sites of injury and stimulates release of VEGF and BDNF, supporting angiogenesis and nerve outgrowth during tissue repair',
      'Broad Institute gene connectivity mapping identified GHK as influencing expression of more than 4,000 human genes, including upregulation of 47 DNA repair genes, suggesting activity extending well beyond collagen synthesis',
      'Plasma GHK-Cu concentration is approximately 200 ng/mL at age 20 and declines to approximately 80 ng/mL by age 60, paralleling known age-related declines in skin density and tissue repair capacity',
      'Areas of active research include skin aging, wound healing, connective tissue regeneration, lung fibroblast function in COPD models, and gene expression modulation',
    ],
    researchFindings: [
      {
        title: 'Rat Wound Chamber Model Collagen and Glycosaminoglycan Accumulation',
        protocol: 'Controlled preclinical study in rats. Repeated injections of glycyl-histidyl-lysine-Cu2+ at 2mg per injection administered into implanted wound chambers. Wound tissue assessed by dry weight, total protein content, hydroxyproline content as a collagen marker, and uronic acid content as a glycosaminoglycan marker. Electrophoretic analysis performed to characterize glycosaminoglycan subtypes.',
        effects: 'GHK-Cu injections produced significant increases in wound tissue dry weight and total protein content. Type I collagen production and glycosaminoglycan accumulation were both elevated compared to controls. Electrophoretic analysis showed increased chondroitin sulfate and dermatan sulfate in treated chambers. No adverse findings reported.',
        citation: 'Maquart, F.X., et al. (1993). In vivo stimulation of connective tissue accumulation by the tripeptide-copper complex glycyl-L-histidyl-L-lysine in rat experimental wounds. Journal of Clinical Investigation, 92(5), 2368–2376.',
        citationUrl: 'https://doi.org/10.1172/JCI116842',
      },
      {
        title: 'Ischemic Open Wound Study in Rats',
        protocol: 'Controlled preclinical study in rats. Full-thickness 6mm diameter wounds created in an ischemic skin flap on dorsal surface. Wounds treated daily for 13 days with topical GHK-Cu, topical vehicle control, or no treatment. Wound closure assessed by imaging. Tissue analyzed for matrix metalloproteinase 2 and 9 activity and tumor necrosis factor-beta concentration.',
        effects: 'Ischemic wounds treated with GHK-Cu demonstrated faster wound closure compared to vehicle and untreated controls. Treated wounds showed decreased concentrations of matrix metalloproteinases 2 and 9 and reduced tumor necrosis factor-beta, indicating a reduction in the proteolytic and inflammatory activity that delays healing in ischemic tissue. No adverse findings reported.',
        citation: 'Canapp, S.O., et al. (2003). The effect of topical tripeptide-copper complex on healing of ischemic open wounds. Veterinary Surgery, 32(6), 515–523.',
        citationUrl: 'https://doi.org/10.1053/j.tvsd.2003.08.002',
      },
      {
        title: 'Collagen Production Comparison Trial — GHK-Cu, Vitamin C, and Retinoic Acid',
        protocol: 'Controlled observational trial. Subjects applied topical GHK-Cu, vitamin C, or retinoic acid cream to the thigh for a defined treatment period. Skin biopsy samples collected and analyzed using immunohistological techniques to quantify collagen production in dermal tissue.',
        effects: 'GHK-Cu produced collagen increases in 70% of subjects. Vitamin C produced collagen increases in 50% of subjects. Retinoic acid produced collagen increases in 40% of subjects. GHK-Cu demonstrated the highest collagen-stimulating response of the three compounds tested. No serious adverse findings reported.',
        citation: 'Abdulghani, A.A., et al. (1998). Peptide-copper complexes improve skin firmness of healthy volunteers. Cosmetics and Toiletries, 114, 73–83. Referenced in: Pickart, L., et al. (2015). GHK Peptide as a Natural Modulator of Multiple Cellular Pathways in Skin Regeneration. BioMed Research International.',
        citationUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4508379/',
      },
      {
        title: '12-Week Controlled Facial Trial — Skin Density, Thickness, and Fine Lines',
        protocol: 'Controlled 12-week trial. 71 subjects applied topical GHK-Cu formulation to facial skin. Skin density, thickness, and fine line parameters assessed at baseline and end of treatment using validated measurement instruments.',
        effects: 'Subjects showed improvements in skin density and thickness, reduction in fine lines, and improved overall skin surface quality at 12 weeks compared to baseline. Results were consistent with the collagen and glycosaminoglycan stimulatory effects observed in preclinical models. No serious adverse findings reported.',
        citation: 'Leyden, J.J., et al. Referenced in: Pickart, L., Vasquez-Soltero, J.M., Margolina, A. (2015). GHK Peptide as a Natural Modulator of Multiple Cellular Pathways in Skin Regeneration. BioMed Research International.',
        citationUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4508379/',
      },
    ],
    faq: [
      {
        question: 'Does the product come with handling guidance?',
        answer: 'Each vial is supplied as a lyophilized (freeze-dried) powder and is intended strictly for laboratory research use. Our team is available via text to assist with any technical questions regarding storage, reconstitution supplies, or handling within a research context.',
      },
      {
        question: 'What is the exact quantity in each vial?',
        answer: 'The quantity is clearly labeled on each vial and corresponds to the amount listed on the product page. Every batch is third-party tested and verified for purity, identity, and quantity. A Certificate of Analysis (COA) is available for each lot confirming these specifications.',
      },
      {
        question: 'What additional supplies are needed for research use?',
        answer: 'Depending on the nature of your research, you may require bacteriostatic water for reconstitution, appropriate syringes, and sterile handling equipment. These are standard laboratory consumables and are not included with the vial. Our team can point you in the right direction if needed.',
      },
      {
        question: 'How long does a vial remain stable once received?',
        answer: 'Lyophilized peptide vials should be stored in a cool, dry environment away from direct light. Under proper storage conditions, stability is maintained for an extended period. Refer to the COA for lot-specific stability data. Once reconstituted, the compound should be used within the timeframe appropriate for the specific peptide and storage conditions.',
      },
    ],
  },
  {
    id: '9',
    name: 'CJC 1295/Ipamorelin',
    slug: 'cjc1295-ipamorelin',
    category: 'GHRH',
    purity: 99.4,
    price: 74.99,
    form: 'Lyophilized Powder',
    image: '/images/cjc1295-ipamorelin.jpg',
    description: 'CJC 1295 (No DAC) and Ipamorelin combination blend.',
    specs: '3mL vial',
    overview: 'CJC-1295 No DAC + Ipamorelin is a two-compound blend studied for its ability to stimulate growth hormone release through two separate biological pathways simultaneously. Research shows each compound mimics a different natural signal, producing a more complete growth hormone stimulus when combined, released in natural pulses and without meaningfully raising cortisol or other stress hormones.',
    researchEffects: [
      'CJC-1295 No DAC is theorized to stimulate growth hormone release by binding to GHRH receptors on pituitary somatotroph cells, activating cAMP and PKA signaling pathways to enhance GH synthesis and secretion',
      'Ipamorelin is theorized to amplify GH release through a distinct and complementary pathway, binding to ghrelin receptors and triggering intracellular calcium mobilization to produce an additional GH pulse',
      'Research suggests the two compounds produce a combined GH stimulus exceeding what either achieves independently, with GH levels observed to increase 2 to 10 fold over baseline in human studies of GHRH analog administration',
      'IGF-1 elevation of 1.5 to 3 fold has been observed in studies, with levels remaining elevated for 9 to 11 days following single administration and above baseline for up to 28 days with multiple administrations',
      'Ipamorelin has been shown to selectively stimulate GH release without meaningfully raising cortisol, ACTH, or prolactin, distinguishing it from less selective growth hormone secretagogues',
      'Areas of active research include growth hormone axis regulation, metabolic function, body composition, and age-related hormonal decline models',
    ],
    researchFindings: [
      {
        title: 'Growth Hormone Normalization Study in Mice',
        protocol: 'Controlled comparative study in GHRH knockout mice. CJC-1295 administered once daily, every 48 hours, or every 72 hours. Body weight, body length, femur and tibia length, lean mass, subcutaneous fat mass, pituitary GH mRNA, and somatotroph cell count assessed throughout the study window.',
        effects: 'Mice receiving once-daily administration achieved normal body weight and length compared to untreated controls. Mice treated every 48 and 72 hours reached higher body weight and length than controls without full normalization. Femur and tibia length remained normal in the once-daily and every-48-hour groups. Lean mass and subcutaneous fat mass were normal across all treated groups. Pituitary GH mRNA and somatotroph cell count increased, suggesting proliferation of GH-producing cells. No adverse findings reported.',
        citation: 'Alba, M., et al. (2006). Once-daily administration of CJC-1295, a long-acting growth hormone-releasing hormone (GHRH) analog, normalizes growth in the GHRH knockout mouse. American Journal of Physiology, Endocrinology and Metabolism, 291(6), E1290–E1294.',
        citationUrl: 'https://pubmed.ncbi.nlm.nih.gov/16822944/',
      },
      {
        title: 'Ipamoren Selectivity Study in Rats',
        protocol: 'Controlled comparative study in Sprague-Dawley rats. Ipamorelin administered and assessed against GHRP-2, GHRP-6, and other secretagogues. GH pulse amplitude, onset, half-life, cortisol, ACTH, and prolactin levels measured throughout.',
        effects: 'Ipamorelin produced a rapid GH pulse peaking within approximately one hour with a half-life of approximately two hours. GH release was comparable in magnitude to GHRP-6. Cortisol, ACTH, and prolactin levels showed no meaningful increase at any protocol level, demonstrating a selectivity profile distinct from less specific secretagogues. No adverse findings reported.',
        citation: 'Raun, K., et al. (1998). Ipamorelin, the first selective growth hormone secretagogue. European Journal of Endocrinology, 139(5), 552–561.',
        citationUrl: 'https://pubmed.ncbi.nlm.nih.gov/9865357/',
      },
      {
        title: 'Phase 2 Dose-Escalation Trial for GH and IGF-1 Response',
        protocol: 'Phase 2 randomized controlled trial. 65 subjects received subcutaneous CJC-1295 at 30, 60, 90, or 120 mcg/kg. GH and IGF-1 levels measured at multiple time points through day 28.',
        effects: 'GH levels increased 2 to 10 fold above baseline and remained elevated for 6 or more days following a single administration. IGF-1 levels increased 1.5 to 3 fold and remained elevated for 9 to 11 days. With multiple administrations, IGF-1 remained above baseline for up to 28 days. No additional benefit was observed above 60 mcg/kg. No significant changes in cortisol, thyroid hormones, or glucose. No serious adverse events reported.',
        citation: 'Teichman, S.L., et al. (2006). Prolonged stimulation of growth hormone (GH) and insulin-like growth factor I secretion by CJC-1295, a long-acting analog of GH-releasing hormone, in healthy adults. Journal of Clinical Endocrinology and Metabolism, 91(3), 799–805.',
        citationUrl: 'https://pubmed.ncbi.nlm.nih.gov/16352683/',
      },
    ],
    faq: [
      {
        question: 'Does the product come with handling guidance?',
        answer: 'Each vial is supplied as a lyophilized (freeze-dried) powder and is intended strictly for laboratory research use. Our team is available via text to assist with any technical questions regarding storage, reconstitution supplies, or handling within a research context.',
      },
      {
        question: 'What is the exact quantity in each vial?',
        answer: 'The quantity is clearly labeled on each vial and corresponds to the amount listed on the product page. Every batch is third-party tested and verified for purity, identity, and quantity. A Certificate of Analysis (COA) is available for each lot confirming these specifications.',
      },
      {
        question: 'What additional supplies are needed for research use?',
        answer: 'Depending on the nature of your research, you may require bacteriostatic water for reconstitution, appropriate syringes, and sterile handling equipment. These are standard laboratory consumables and are not included with the vial. Our team can point you in the right direction if needed.',
      },
      {
        question: 'How long does a vial remain stable once received?',
        answer: 'Lyophilized peptide vials should be stored in a cool, dry environment away from direct light. Under proper storage conditions, stability is maintained for an extended period. Refer to the COA for lot-specific stability data. Once reconstituted, the compound should be used within the timeframe appropriate for the specific peptide and storage conditions.',
      },
    ],
  },
  {
    id: '10',
    name: 'GLP-3R',
    slug: 'glp-3r',
    category: 'Metabolic',
    purity: 99.1,
    price: 84.99,
    form: 'Lyophilized Powder',
    image: '/images/glp-3r.jpg',
    description: 'GLP receptor agonist for metabolic research.',
    specs: '3mL vial',
    overview: 'GLP-3R is an investigational peptide studied for its simultaneous activity on GLP-1, GIP, and glucagon receptors, the three primary drivers of metabolic regulation. Research explores how each receptor contributes a distinct effect: appetite reduction and improved insulin response, enhanced insulin efficiency, and increased resting metabolic rate.',
    researchEffects: [
      'Theorized to reduce food intake and slow gastric emptying through GLP-1 receptor activation, producing appetite suppression and improved postprandial glucose regulation',
      'GIP receptor activation is theorized to enhance insulin efficiency and support lipid clearance, contributing to improvements in body composition and metabolic markers beyond appetite reduction alone',
      'Glucagon receptor activation is theorized to increase energy expenditure and stimulate fat oxidation, adding a resting metabolic rate component not present in single or dual receptor agonists',
      'Phase 2 data observed weight reductions of 22.8% at 8mg and 24.2% at 12mg over 48 weeks, with the 12mg group not appearing to plateau at week 48',
      '72% of subjects with prediabetes at enrollment achieved normalized blood glucose by week 48 in the Phase 2 obesity trial',
      'Areas of active research include obesity, type 2 diabetes, metabolic dysfunction-associated steatotic liver disease, and cardiovascular risk reduction',
    ],
    researchFindings: [
      {
        title: 'Systematic Review and Meta-Analysis of Randomized Controlled Trials',
        protocol: 'Systematic review and meta-analysis of RCTs. Risk of bias assessed using the Cochrane Risk of Bias 2 tool. Outcomes analyzed included percent body weight change, HbA1c levels, and reported adverse effects across dosages.',
        effects: 'GLP-3R demonstrated significant, dose-dependent weight reduction and favorable metabolic outcomes across included trials. Gastrointestinal events including nausea, vomiting, decreased appetite, diarrhea, and constipation were reported at higher rates than placebo and were dose-related. No significant difference between groups for dyspepsia, headache, or abdominal pain.',
        citation: 'Ayesh, H., et al. (2024). Efficacy and safety of GLP-3R, a novel GLP-1, GIP, and glucagon receptor agonist for obesity treatment: a systematic review and meta-analysis of randomized controlled trials. PMC.',
        citationUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12026077/',
      },
      {
        title: 'Diet-Induced Obese MASH Mouse and Hamster Model Study',
        protocol: 'Controlled comparative study in diet-induced obese mice and hamsters. GLP-3R administered subcutaneously versus vehicle control. Body weight, fat mass, lean mass, food intake, energy expenditure, HOMA-IR, hepatic steatosis score, fatty acids, triglycerides, and total cholesterol assessed throughout the study window.',
        effects: 'GLP-3R reduced body weight by 31% versus vehicle in mice. Fat mass, food intake, and water intake were reduced from early in the treatment window. HOMA-IR index of insulin resistance, hepatic steatosis score, fatty acids, triglycerides, and total cholesterol were markedly reduced. In hamsters, food preference shifted toward lower fat and lower fructose intake. Lean mass was preserved by week 5 with no change in mineral bone density. No adverse findings reported.',
        citation: 'Briand, F., et al. (2025). GLP-3R shows multiple metabolic benefits in diet-induced obese MASH mouse and hamster models. Obesity.',
        citationUrl: 'https://onlinelibrary.wiley.com/doi/10.1002/oby.70155',
      },
      {
        title: 'Phase 2 Randomized Controlled Trial for Obesity Without Diabetes',
        protocol: 'Phase 2 randomized placebo-controlled trial. Subjects received once-weekly subcutaneous GLP-3R at 1mg, 4mg, 8mg, or 12mg, or placebo. Body weight, metabolic markers, and adverse events assessed through week 48.',
        effects: 'Mean weight reduction at 48 weeks was 8.7% at 1mg, 17.1% at 4mg, 22.8% at 8mg, and 24.2% at 12mg versus 2.1% for placebo. At 12mg, over 90% of subjects lost 10% or more of baseline weight and approximately 25% lost 30% or more. Weight loss had not plateaued at week 48 in the highest dose groups. 72% of subjects with prediabetes achieved normalized blood glucose. Gastrointestinal events were the most common adverse effects, were dose-related, and were mostly mild to moderate in severity.',
        citation: 'Jastreboff, A.M., et al. (2023). Triple-hormone-receptor agonist GLP-3R for obesity: a phase 2 trial. New England Journal of Medicine, 389(6), 514–526.',
        citationUrl: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2301972',
      },
      {
        title: 'Phase 2 Randomized Controlled Trial for Type 2 Diabetes',
        protocol: 'Phase 2 randomized double-blind placebo and active-controlled trial. Subjects received GLP-3R at multiple dose levels or comparator over 36 weeks. HbA1c, body weight, liver fat content, and metabolic markers assessed throughout.',
        effects: '77 to 82% of subjects receiving 8 to 12mg achieved HbA1c below 6.5% at 36 weeks. Mean HbA1c improvement reached 2.02 percentage points versus placebo. Dose-dependent reductions in body weight and liver fat content observed. Over 90% of subjects at the highest dose achieved liver fat normalization in the substudy. Gastrointestinal events were the most commonly reported adverse effects.',
        citation: 'Frias, J.P., et al. (2023). GLP-3R, a GIP, GLP-1 and glucagon receptor agonist, for people with type 2 diabetes: a phase 2 trial. Lancet, 402(10401), 529–544.',
        citationUrl: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(23)01053-X/fulltext',
      },
    ],
    faq: [
      {
        question: 'Does the product come with handling guidance?',
        answer: 'Each vial is supplied as a lyophilized (freeze-dried) powder and is intended strictly for laboratory research use. Our team is available via text to assist with any technical questions regarding storage, reconstitution supplies, or handling within a research context.',
      },
      {
        question: 'What is the exact quantity in each vial?',
        answer: 'The quantity is clearly labeled on each vial and corresponds to the amount listed on the product page. Every batch is third-party tested and verified for purity, identity, and quantity. A Certificate of Analysis (COA) is available for each lot confirming these specifications.',
      },
      {
        question: 'What additional supplies are needed for research use?',
        answer: 'Depending on the nature of your research, you may require bacteriostatic water for reconstitution, appropriate syringes, and sterile handling equipment. These are standard laboratory consumables and are not included with the vial. Our team can point you in the right direction if needed.',
      },
      {
        question: 'How long does a vial remain stable once received?',
        answer: 'Lyophilized peptide vials should be stored in a cool, dry environment away from direct light. Under proper storage conditions, stability is maintained for an extended period. Refer to the COA for lot-specific stability data. Once reconstituted, the compound should be used within the timeframe appropriate for the specific peptide and storage conditions.',
      },
    ],
  },
  {
    id: '11',
    name: 'Bremelanotide',
    slug: 'bremelanotide',
    category: 'Specialty',
    catalogSubtitle: 'PT-141',
    purity: 99.4,
    price: 69.99,
    form: 'Lyophilized Powder',
    image: '/images/bremelanotide.jpg',
    description: 'Melanocortin analog for research (PT-141).',
    specs: '3mL vial',
    overview: 'PT-141 is a synthetic peptide studied for its activity on melanocortin receptors in the brain, which are directly involved in regulating sexual motivation and desire. Rather than increasing blood flow to genital tissue like most compounds in this category, it initiates the arousal signal at its source, upstream in the central nervous system.',
    researchEffects: [
      'Theorized to activate MC3R and MC4R melanocortin receptors in the hypothalamus and limbic structures, regions of the brain directly involved in sexual motivation, desire, and arousal signaling',
      'Research suggests PT-141 enhances oxytocin and dopamine release in reward pathways and activates neurons in the paraventricular nucleus, initiating the arousal signal centrally rather than through peripheral vascular mechanisms',
      'Studies in rats and nonhuman primates demonstrated penile erections following systemic administration, with hypothalamic neuron activation confirmed via c-Fos immunoreactivity in the same brain regions connected to the corpus cavernosum',
      'Phase 3 trial data in subjects with hypoactive sexual desire disorder observed statistically significant improvements in desire scores and distress reduction versus placebo over 24 weeks, leading to FDA approval as Vyleesi in June 2019',
      'Phase 2 data in subjects with erectile dysfunction observed significantly greater penile rigidity at or above 80% at doses of 10 to 20mg with onset of approximately 30 minutes',
      'Areas of active research include hypoactive sexual desire disorder, erectile dysfunction, and central nervous system pathways governing sexual arousal',
    ],
    researchFindings: [
      {
        title: 'CNS Activation Study in Rats and Nonhuman Primates',
        protocol: 'Controlled preclinical study in rats and nonhuman primates. PT-141 administered systemically. Hypothalamic neuron activation assessed via c-Fos immunoreactivity in rats. Neuroanatomical connection between activated hypothalamic region and corpus cavernosum confirmed via pseudorabies virus tracing. Erectile response observed across both species.',
        effects: 'Systemic PT-141 administration produced penile erections in both rats and nonhuman primates. C-Fos immunoreactivity confirmed activation of hypothalamic neurons following administration in rats. Pseudorabies virus tracing confirmed that neurons in the same activated hypothalamic region are directly connected to the corpus cavernosum, establishing the central origin of the observed erectile response. No adverse findings reported.',
        citation: 'Molinoff, P.B., et al. (2003). PT-141: a melanocortin agonist for the treatment of sexual dysfunction. Annals of the New York Academy of Sciences, 994, 96–102.',
        citationUrl: 'https://pubmed.ncbi.nlm.nih.gov/12851303/',
      },
      {
        title: 'Sexual Solicitation Study in Female Rats',
        protocol: 'Controlled preclinical study in female rats. Bremelanotide administered systemically and directly to specific brain regions. Appetitive sexual behaviors including solicitations, hops, darts, and pacing assessed alongside consummatory behaviors. Microdialysis used to assess extracellular neurotransmitter levels in relevant brain regions.',
        effects: 'Bremelanotide selectively facilitated appetitive sexual solicitation behaviors in female rats. Central administration confirmed hypothalamic regions as primary sites of action. Microdialysis revealed increased dopamine and oxytocin activity in reward-associated regions following administration. Consummatory behaviors were not artificially elevated independent of appetitive initiation. No adverse findings reported.',
        citation: 'Pfaus, J.G., et al. Selective facilitation of sexual solicitation in the female rat by a melanocortin receptor agonist. Referenced in: Shadiack, A.M., et al. (2007). Melanocortins in the treatment of male and female sexual dysfunction. Current Topics in Medicinal Chemistry, 7(11), 1137–1144.',
        citationUrl: 'https://pubmed.ncbi.nlm.nih.gov/17584134/',
      },
      {
        title: 'Phase 2 Trial for Female Sexual Arousal Disorder',
        protocol: 'Phase 2 randomized double-blind placebo-controlled trial. 18 subjects received a single intranasal dose of 20mg bremelanotide or matching placebo. Subjective desire, genital arousal, and satisfaction with arousal during attempted intercourse assessed within 24 hours post administration.',
        effects: 'Significantly more subjects reported moderate or high sexual desire following bremelanotide versus placebo. Among subjects who attempted intercourse within 24 hours, significantly more reported satisfaction with their level of arousal following bremelanotide versus placebo. A trend toward more positive genital arousal responses was observed. No serious adverse events reported.',
        citation: 'Diamond, L.E., et al. (2006). An effect on the subjective sexual response in premenopausal women with sexual arousal disorder by bremelanotide (PT-141). Journal of Sexual Medicine, 3(4), 628–638.',
        citationUrl: 'https://pubmed.ncbi.nlm.nih.gov/16839319/',
      },
      {
        title: 'RECONNECT Phase 3 Randomized Controlled Trial for Hypoactive Sexual Desire Disorder',
        protocol: 'Phase 3 randomized double-blind placebo-controlled trial. 1,267 subjects administered bremelanotide 1.75mg subcutaneously on demand or placebo over 24 weeks. Primary endpoints were change in desire score and change in distress score. Open-label extension continued for 6 months.',
        effects: 'Statistically significant and clinically meaningful improvements in sexual desire scores and sexually related distress scores observed versus placebo across both trials. Results supported FDA approval of bremelanotide as Vyleesi in June 2019 for hypoactive sexual desire disorder in premenopausal subjects. Nausea was the most commonly reported adverse event at 40%, with flushing at 20.3% and injection site reactions at 13.2%. Adverse effects were transient in most subjects.',
        citation: 'Clayton, A.H., et al. (2016). Bremelanotide for female sexual dysfunctions in premenopausal women: a randomized, placebo-controlled dose-finding trial. Women\'s Health, 12(3), 325–337.',
        citationUrl: 'https://pubmed.ncbi.nlm.nih.gov/27147486/',
      },
    ],
    faq: [
      {
        question: 'Does the product come with handling guidance?',
        answer: 'Each vial is supplied as a lyophilized (freeze-dried) powder and is intended strictly for laboratory research use. Our team is available via text to assist with any technical questions regarding storage, reconstitution supplies, or handling within a research context.',
      },
      {
        question: 'What is the exact quantity in each vial?',
        answer: 'The quantity is clearly labeled on each vial and corresponds to the amount listed on the product page. Every batch is third-party tested and verified for purity, identity, and quantity. A Certificate of Analysis (COA) is available for each lot confirming these specifications.',
      },
      {
        question: 'What additional supplies are needed for research use?',
        answer: 'Depending on the nature of your research, you may require bacteriostatic water for reconstitution, appropriate syringes, and sterile handling equipment. These are standard laboratory consumables and are not included with the vial. Our team can point you in the right direction if needed.',
      },
      {
        question: 'How long does a vial remain stable once received?',
        answer: 'Lyophilized peptide vials should be stored in a cool, dry environment away from direct light. Under proper storage conditions, stability is maintained for an extended period. Refer to the COA for lot-specific stability data. Once reconstituted, the compound should be used within the timeframe appropriate for the specific peptide and storage conditions.',
      },
    ],
  },
  {
    id: '12',
    name: 'MOTS-C',
    slug: 'mots-c',
    category: 'Metabolic',
    purity: 99.2,
    price: 94.99,
    form: 'Lyophilized Powder',
    image: '/images/mots-c.jpg',
    description: 'Mitochondrial-derived peptide and exercise mimetic for metabolic research.',
    specs: '10mg',
    overview: 'MOTS-c is a 16-amino-acid peptide encoded within the mitochondrial genome that functions as a cellular energy sensor and metabolic regulator. Research suggests it activates the AMPK pathway in skeletal muscle, promoting glucose uptake, insulin sensitivity, and mitochondrial function, and is theorized to act as an exercise mimetic by replicating key molecular signals that exercise generates endogenously.',
    researchEffects: [
      'Theorized to activate AMPK via inhibition of the folate cycle and its downstream de novo purine biosynthesis pathway, increasing glucose entry into cells and improving metabolic flexibility across insulin-sensitive tissues',
      'Research indicates MOTS-c translocates from mitochondria to the nucleus under metabolic stress in an AMPK-dependent manner, where it binds transcription factors to regulate nuclear gene expression related to antioxidant defense and stress resistance',
      'Studies in mice show MOTS-c treatment prevented both age-dependent and high-fat-diet-induced insulin resistance and suppressed diet-induced obesity, with skeletal muscle identified as the primary target organ',
      'Preclinical data across young, middle-aged, and old mice demonstrated improved physical capacity at doses of 5 to 15mg/kg, with late-life initiated treatment at 23.5 months still producing measurable improvements in physical capacity and healthspan',
      'Endogenous MOTS-c levels increase approximately 11.9-fold in skeletal muscle during exercise and 1.6-fold in circulation, identifying it as an exercise-induced mitochondrial signal and supporting its classification as an exercise mimetic',
      'Circulating MOTS-c levels decline with age and are observed at lower levels in subjects with obesity, type 2 diabetes, and insulin resistance across multiple cohort studies. Areas of active research include metabolic aging, insulin resistance, obesity, physical capacity, and mitochondrial signaling.',
    ],
    researchFindings: [
      {
        title: 'Founding Metabolic Homeostasis Study in Mice — AMPK Activation and Insulin Sensitivity',
        protocol: 'Controlled preclinical study in mice. MOTS-c administered systemically to mice on standard diet, high-fat diet, and aging cohorts. Insulin sensitivity assessed by glucose tolerance testing and insulin tolerance testing. Body weight, glucose uptake in skeletal muscle, AMPK activation, folate cycle activity, and metabolic marker expression measured. Genetic and pharmacological screening used to identify mechanism of action.',
        effects: 'MOTS-c treatment prevented age-dependent insulin resistance in normally aging mice. MOTS-c prevented high-fat-diet-induced insulin resistance and suppressed diet-induced obesity. Cellular mechanism identified as inhibition of the folate cycle leading to AICAR accumulation and AMPK activation, promoting glucose uptake into skeletal muscle. Skeletal muscle was confirmed as the primary target organ. No adverse findings reported.',
        citation: 'Lee, C., et al. (2015). The mitochondrial-derived peptide MOTS-c promotes metabolic homeostasis and reduces obesity and insulin resistance. Cell Metabolism, 21(3), 443–454.',
        citationUrl: 'https://doi.org/10.1016/j.cmet.2015.02.009',
      },
      {
        title: 'Physical Capacity Study Across Age Groups in Mice — Exercise Mimetic Effects',
        protocol: 'Controlled preclinical study in mice at 2 months, 12 months, and 22 months of age. MOTS-c administered at 5 to 15mg/kg intraperitoneally three times per week. Physical capacity assessed by treadmill running performance and power output. Late-life treatment initiated at 23.5 months to assess healthspan effects. Skeletal muscle gene expression, metabolism, and myoblast stress adaptation assessed.',
        effects: 'MOTS-c treatment significantly enhanced physical performance in young, middle-aged, and old mice. Late-life initiated treatment at 23.5 months increased physical capacity and improved healthspan markers. MOTS-c regulated nuclear genes related to metabolism and proteostasis in skeletal muscle and enhanced myoblast adaptation to metabolic stress. In a parallel human observation, exercise induced endogenous MOTS-c expression in skeletal muscle and in circulation, consistent with MOTS-c functioning as an exercise-induced mitochondrial signal. No adverse findings reported.',
        citation: 'Reynolds, J.C., et al. (2021). MOTS-c is an exercise-induced mitochondrial-encoded regulator of age-dependent physical decline and muscle homeostasis. Nature Communications, 12(1), 470.',
        citationUrl: 'https://doi.org/10.1038/s41467-020-20790-0',
      },
      {
        title: 'CB4211 Phase 1a/1b Clinical Trial — MOTS-c Analog in Healthy Subjects and Subjects with Obesity and NAFLD',
        protocol: 'Phase 1a/1b clinical trial. Phase 1a: 65 healthy adult subjects. Phase 1b: 20 subjects with obesity and nonalcoholic fatty liver disease. CB4211 administered subcutaneously at 25mg once daily for 4 weeks in Phase 1b. Endpoints included ALT, AST, fasting glucose, and liver fat assessed by MRI-PDFF.',
        effects: 'Phase 1b subjects receiving CB4211 demonstrated ALT reduction of 25% versus placebo and AST reduction of 17%. Fasting glucose decreased significantly versus placebo. 36% of treated subjects achieved a 30% or greater relative reduction in liver fat by MRI-PDFF. No serious adverse events reported in either phase. Results were consistent with MOTS-c analog activity on insulin sensitivity and hepatic metabolic function observed in preclinical models.',
        citation: 'CohBar, Inc. (2021). CB4211 Phase 1a/1b Clinical Study Results. ClinicalTrials.gov.',
        citationUrl: 'https://clinicaltrials.gov/ct2/show/NCT03998514',
      },
    ],
    faq: [
      {
        question: 'Does the product come with handling guidance?',
        answer: 'Each vial is supplied as a lyophilized (freeze-dried) powder and is intended strictly for laboratory research use. Our team is available via text to assist with any technical questions regarding storage, reconstitution supplies, or handling within a research context.',
      },
      {
        question: 'What is the exact quantity in each vial?',
        answer: 'The quantity is clearly labeled on each vial and corresponds to the amount listed on the product page. Every batch is third-party tested and verified for purity, identity, and quantity. A Certificate of Analysis (COA) is available for each lot confirming these specifications.',
      },
      {
        question: 'What additional supplies are needed for research use?',
        answer: 'Depending on the nature of your research, you may require bacteriostatic water for reconstitution, appropriate syringes, and sterile handling equipment. These are standard laboratory consumables and are not included with the vial. Our team can point you in the right direction if needed.',
      },
      {
        question: 'How long does a vial remain stable once received?',
        answer: 'Lyophilized peptide vials should be stored in a cool, dry environment away from direct light. Under proper storage conditions, stability is maintained for an extended period. Refer to the COA for lot-specific stability data. Once reconstituted, the compound should be used within the timeframe appropriate for the specific peptide and storage conditions.',
      },
    ],
  },
  {
    id: '13',
    name: 'BAC Water',
    slug: 'bac-water',
    category: 'Supplies',
    catalogSubtitle: 'Bacteriostatic Water',
    purity: 99.9,
    price: 14.99,
    form: 'Solution',
    image: '/images/bac-water.jpg',
    description: 'Bacteriostatic water for peptide reconstitution.',
    specs: '30mL vial',
  },
];

export const categories = Array.from(
  new Set(products.map((p) => p.category))
).sort();

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function searchProducts(query: string): Product[] {
  if (!query.trim()) return [];
  const lowerQuery = query.toLowerCase();
  return products.filter((p) =>
    p.name.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery)
  );
}
