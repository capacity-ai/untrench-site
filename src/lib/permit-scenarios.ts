export interface ReasoningStep {
  ms: number;
  text: string;
  detail: string;
}

export interface Issue {
  ms: number;
  severity: 'high' | 'medium' | 'info';
  category: string;
  title: string;
  body: string;
  cite: string;
  suggested: string | null;
}

export interface Letter {
  subject: string;
  body: string;
}

export interface Scenario {
  docTitle: string;
  juris: string;
  code: string;
  reviewer: string;
  pages: number;
  docContent: string;
  steps: ReasoningStep[];
  issues: Issue[];
  letter: Letter;
}

export type ScenarioKey = 'adu' | 'cafe' | 'solar';

export const SCENARIOS: Record<ScenarioKey, Scenario> = {
  adu: {
    docTitle: 'PRMT-2026-0418 &middot; ADU, 720 sf',
    juris: 'Rivertown, OR (pop. 14,200)',
    code: '2022 ORSC + RTMC Title 17',
    reviewer: 'M. Aoki (auto-routed)',
    pages: 11,
    docContent: `
      <div class="font-semibold mb-2">PERMIT APPLICATION &middot; ACCESSORY DWELLING UNIT</div>
      <div class="opacity-70 mb-3 text-[11px] mono">Submittal date: 14 Apr 2026 &middot; Applicant: Cedar &amp; Beam Design-Build</div>
      <div class="mb-3"><span class="opacity-60">Project:</span> Detached ADU, single-story</div>
      <div class="mb-3"><span class="opacity-60">Address:</span> 412 Willow Lane, Rivertown OR</div>
      <div class="mb-3"><span class="opacity-60">Lot:</span> R-1 Single Family, 6,200 sf</div>
      <div class="mb-3"><span class="opacity-60">Existing:</span> 1,840 sf SFR (1972), detached garage</div>
      <div class="mb-3"><span class="opacity-60">Proposed ADU:</span> 720 sf, 1 BR / 1 BA</div>
      <div class="mb-3"><span class="opacity-60">Setbacks shown:</span></div>
      <div class="ml-3 mb-3 text-[12px]">
        Front: <span class="num">22'-0"</span><br/>
        Side (E): <span class="num">5'-2"</span><br/>
        Side (W): <span class="num">4'-9"</span><br/>
        <span style="background: var(--accent-soft);">Rear: <span class="num">3'-6"</span></span>
      </div>
      <div class="mb-3 opacity-60 text-[11px]">Sheets: A0.0 cover; A1.0 site; A2.0 floor; A2.1 RCP; A3.0 elev N/E; A3.1 elev S/W; A4.0 sections; A5.0 details; S1.0 found; S2.0 framing; M-E-P</div>
    `,
    steps: [
      { ms: 600, text: 'Reading submittal sheets (11)&hellip;', detail: 'Extracting site, floor, elevation data from sheet set' },
      { ms: 1400, text: 'Identifying jurisdiction &amp; code in force', detail: 'Rivertown, OR. 2022 ORSC adopted 2023-03; RTMC Title 17 amendments through 2026-Q1' },
      { ms: 2200, text: 'Cross-checking against zoning (R-1)', detail: 'Lot 6,200 sf &middot; ADU 720 sf &middot; ratio 11.6% (under 15% cap, ok)' },
      { ms: 3000, text: 'Checking setbacks against RTMC &sect;17.32.060', detail: "Front 22'-0\" ok &middot; Sides 5'-2\"/4'-9\" ok &middot; Rear 3'-6\" -- flagged" },
      { ms: 3700, text: 'Verifying egress per ORSC R310', detail: 'Bedroom 2 sill height 46" -- flagged (R310.2.2 max 44")' },
      { ms: 4500, text: 'Checking parking per RTMC &sect;17.44.030', detail: 'No parking shown -- context-dependent (transit overlay?)' },
      { ms: 5200, text: 'Checking transit overlay (RTMC &sect;17.44.090, 2024)', detail: "Parcel within 1/4-mile of designated transit corridor; minimums waived" },
      { ms: 5900, text: 'Reviewing solar-ready provisions (ORSC R107.2)', detail: 'Designation noted on A0.0; appears compliant' },
      { ms: 6500, text: 'Reviewing fire-rating for proximity (ORSC R302.1)', detail: "West setback 4'-9\", under 5' triggers 1-hr rated wall; not shown on A3.1" },
      { ms: 7200, text: 'Compiling findings &amp; drafting reviewer letter', detail: '3 issues flagged, 1 advisory note, draft ready for M. Aoki review' },
    ],
    issues: [
      {
        ms: 3300,
        severity: 'high',
        category: 'Setback',
        title: 'Rear setback below minimum',
        body: 'Plan A1.0 shows rear setback at <span class="num">3\'-6"</span>. RTMC &sect;17.32.060(B)(2) requires <span class="num">4\'-0"</span> minimum rear setback for detached ADUs over 600 sf in R-1.',
        cite: 'RTMC §17.32.060(B)(2)',
        suggested: "Revise siting to provide 4'-0\" minimum rear setback, or reduce ADU footprint to ≤600 sf to qualify for 3'-0\" setback under §17.32.060(B)(1).",
      },
      {
        ms: 4000,
        severity: 'high',
        category: 'Egress',
        title: 'Emergency egress sill height exceeds maximum',
        body: 'Bedroom window on sheet A2.0 shows sill at <span class="num">46"</span> from finished floor. ORSC R310.2.2 requires sill &le;<span class="num">44"</span>.',
        cite: 'ORSC R310.2.2',
        suggested: 'Lower sill to ≤44" or provide a permanently affixed step compliant with R310.2.2 exception.',
      },
      {
        ms: 6800,
        severity: 'medium',
        category: 'Fire-resistance',
        title: 'Rated wall not shown for west elevation',
        body: 'West setback (<span class="num">4\'-9"</span>) is under 5\'-0", which per ORSC R302.1 triggers a 1-hour fire-rated exterior wall assembly. Sheet A3.1 elevation does not call out a rated assembly; sheet A4.0 wall sections show standard non-rated construction.',
        cite: 'ORSC R302.1, Table R302.1(1)',
        suggested: "Provide rated assembly detail on A4.0 and reference on A3.1, or revise siting to ≥5'-0\" west setback.",
      },
      {
        ms: 5600,
        severity: 'info',
        category: 'Note',
        title: 'No parking required, transit overlay applies',
        body: 'Parcel falls within RTMC &sect;17.44.090 transit overlay (added 2024). Parking minimums for ADUs are waived in this overlay; absence of parking on A1.0 is compliant.',
        cite: 'RTMC §17.44.090',
        suggested: null,
      },
    ],
    letter: {
      subject: 'PRMT-2026-0418 &middot; First-round review &middot; corrections required',
      body: `
        <p>Dear Cedar &amp; Beam Design-Build,</p>
        <p>Thank you for your ADU permit submittal at 412 Willow Lane. We have completed first-round plan review.
        The following items must be addressed before we can move to issuance:</p>

        <p><strong>1. Rear setback (RTMC &sect;17.32.060(B)(2))</strong><br/>
        Sheet A1.0 shows rear setback at 3'-6". For a detached ADU over 600 sf in R-1, the minimum required rear
        setback is 4'-0". Please revise the site plan to comply, or reduce the footprint to qualify for the 600-sf
        setback exception under &sect;17.32.060(B)(1).</p>

        <p><strong>2. Bedroom egress sill height (ORSC R310.2.2)</strong><br/>
        The bedroom egress window on A2.0 shows a sill height of 46". Code requires the sill to be no more than 44"
        from the finished floor. Please revise.</p>

        <p><strong>3. Fire-resistance for west wall (ORSC R302.1)</strong><br/>
        West setback is shown at 4'-9". This is under the 5'-0" threshold and requires a 1-hour fire-rated exterior
        wall per Table R302.1(1). Please add a rated assembly detail on A4.0 and reference it on the A3.1 elevation,
        or revise the siting to &ge;5'-0".</p>

        <p><strong>Note:</strong> Parking is not required at this address. The parcel falls within the RTMC &sect;17.44.090
        transit overlay (effective 2024), which waives ADU parking minimums.</p>

        <p>Please respond with revised drawings within 30 days. We are happy to schedule a quick call to walk through any
        of the above.</p>

        <p>Sincerely,<br/>
        M. Aoki<br/>
        Plan Reviewer, Rivertown Community Development</p>
      `,
    },
  },

  cafe: {
    docTitle: 'PRMT-2026-0511 &middot; TI cafe',
    juris: 'Maple Bluff, WI (pop. 28,800)',
    code: '2021 IBC + WI SPS 362',
    reviewer: 'D. Halloran (auto-routed)',
    pages: 18,
    docContent: `
      <div class="font-semibold mb-2">PERMIT APPLICATION &middot; TENANT IMPROVEMENT</div>
      <div class="opacity-70 mb-3 text-[11px] mono">Submittal: 02 May 2026 &middot; Applicant: Northwood AE</div>
      <div class="mb-3"><span class="opacity-60">Project:</span> TI &middot; cafe (38 seats)</div>
      <div class="mb-3"><span class="opacity-60">Address:</span> 2240 Lake Rd, Suite C</div>
      <div class="mb-3"><span class="opacity-60">Building:</span> 1986 retail strip, V-B, sprinklered (NFPA 13R retrofit 2014)</div>
      <div class="mb-3"><span class="opacity-60">Existing use:</span> Vacant retail (Group M)</div>
      <div class="mb-3"><span class="opacity-60">Proposed use:</span> Cafe (Group A-2, &lt;50 occupants)</div>
      <div class="mb-3"><span class="opacity-60">Area:</span> 1,840 sf &middot; <span class="opacity-60">Seats:</span> 38 + counter 6</div>
      <div class="mb-3"><span class="opacity-60">Kitchen:</span> Type II hood, no open flame</div>
      <div class="mb-3"><span class="opacity-60">Restrooms:</span> 1 unisex (existing)</div>
      <div class="mb-3 opacity-60 text-[11px]">Sheets: A0/A1.0 cover &amp; site; A2.0-A2.4 floor/RCP/finish/eq/egress; A3.0 elev; A4.0 sec/det; M1.0-M2.1 mech/exh; P1.0-P2.0 plumb; E1.0-E2.0 elec; FA1.0 fire alarm</div>
    `,
    steps: [
      { ms: 600, text: 'Reading TI submittal (18 sheets)&hellip;', detail: 'Existing/proposed use change M to A-2' },
      { ms: 1400, text: 'Confirming code in force', detail: '2021 IBC adopted by WI SPS 361/362; Maple Bluff local amendments through 2025-Q4' },
      { ms: 2200, text: 'Use-change analysis', detail: 'Group M to A-2: requires re-evaluation of egress, occupancy, plumbing, accessibility' },
      { ms: 3000, text: 'Calculating occupant load (IBC 1004.5)', detail: '38 seats + 6 counter + 4 staff = 48 (assembly tables/chairs at 15 sf/occ)' },
      { ms: 3700, text: 'Checking egress for A-2 thresholds', detail: "Under 50 occupants: single exit allowed if travel ≤75'. Plan shows 82' from rear corner, flagged" },
      { ms: 4500, text: 'Checking plumbing fixture count (IBC 2902 + WI 382)', detail: 'A-2 with 48 occupants requires 2 WC + 2 lav (gender-separated). 1 unisex shown -- flagged' },
      { ms: 5200, text: 'Reviewing kitchen ventilation (IMC 507)', detail: 'Type II hood for cafe-grade equipment ok; makeup air ratio not shown on M2.0 -- flagged' },
      { ms: 5900, text: 'Accessibility (ANSI A117.1, 2009)', detail: 'Existing unisex restroom does not meet A117.1 turning radius on as-built; alteration triggers compliance -- flagged' },
      { ms: 6700, text: 'Energy code review (WI SPS 363, IECC C501)', detail: 'Existing envelope; alteration triggers lighting power density compliance. LPD calc on E1.0 reviewed, ok' },
      { ms: 7400, text: 'Fire alarm scope (IBC 907.2.1)', detail: 'A-2 under 100 occupants: manual fire alarm not required; existing system retained -- ok' },
      { ms: 8100, text: 'Compiling findings &amp; drafting reviewer letter', detail: '5 issues flagged, 2 advisory notes, draft ready for D. Halloran review' },
    ],
    issues: [
      {
        ms: 3300,
        severity: 'medium',
        category: 'Use change',
        title: 'Group reclassification documented; flag for record',
        body: 'Submittal correctly reclassifies from Group M to Group A-2. Use change is the trigger for the egress, plumbing, and accessibility findings below.',
        cite: 'IBC 302.1, 305.1',
        suggested: 'No action required. Cited here for records-retention completeness.',
      },
      {
        ms: 4100,
        severity: 'high',
        category: 'Egress',
        title: 'Travel distance exceeds single-exit limit',
        body: 'Sheet A2.4 shows the longest travel distance from the rear seating area at <span class="num">82\'-0"</span>. Per IBC 1006.2.1 Table 1006.2.1, A-2 occupancies with one exit are limited to a 75\'-0" common path of egress travel.',
        cite: 'IBC 1006.2.1, Table 1006.2.1',
        suggested: "Provide a second exit (a rear service door from the kitchen could qualify if upgraded), or rearrange seating to reduce travel distance to ≤75'-0\".",
      },
      {
        ms: 4900,
        severity: 'high',
        category: 'Plumbing',
        title: 'Insufficient plumbing fixtures for A-2 occupant load',
        body: 'Sheet P1.0 shows one unisex water closet. With 48 occupants in Group A-2, IBC Table 2902.1 requires <span class="num">2</span> water closets and <span class="num">2</span> lavatories. Wisconsin SPS 382 permits gender-neutral configuration but the count must still be met.',
        cite: 'IBC Table 2902.1; WI SPS 382.40',
        suggested: 'Add a second restroom, or reduce occupant load below 16 (which would allow a single fixture per IBC 2902.2 exception).',
      },
      {
        ms: 5600,
        severity: 'medium',
        category: 'Mechanical',
        title: 'Kitchen makeup-air ratio not documented',
        body: 'Sheet M2.0 shows a Type II hood at <span class="num">450 cfm</span> exhaust. Makeup air is not separately documented. IMC 508.1 requires makeup air at minimum 80% of exhaust for kitchen hoods.',
        cite: 'IMC 508.1',
        suggested: 'Provide MUA calculation on M2.0 demonstrating ≥360 cfm, or designate transfer-air pathway and verify pressure balance with the larger building.',
      },
      {
        ms: 6300,
        severity: 'high',
        category: 'Accessibility',
        title: 'Existing restroom does not meet A117.1 turning radius',
        body: 'As-built dimensions of the existing unisex restroom show <span class="num">53"</span> clear floor turning space. ANSI A117.1-2009 &sect;304.3.1 requires <span class="num">60"</span> diameter. Because this TI is an alteration, IBC 1101.2 and ICC A117.1 trigger compliance for affected elements.',
        cite: 'IBC 1101.2; ANSI A117.1 §304.3.1',
        suggested: 'Reconfigure restroom to provide 60" turning circle. May coincide with the second-fixture requirement above; consider combining work scopes.',
      },
      {
        ms: 7000,
        severity: 'info',
        category: 'Note',
        title: 'Fire alarm scope confirmed',
        body: 'A-2 occupancy under 100 occupants does not require a manual fire alarm system per IBC 907.2.1. The existing building system per FA1.0 is retained. No action required.',
        cite: 'IBC 907.2.1',
        suggested: null,
      },
      {
        ms: 7800,
        severity: 'info',
        category: 'Note',
        title: 'Energy compliance verified',
        body: 'Lighting power density calculation on E1.0 is consistent with WI SPS 363 / IECC C405 limits for food-service space type. No action required.',
        cite: 'IECC C405; WI SPS 363',
        suggested: null,
      },
    ],
    letter: {
      subject: 'PRMT-2026-0511 &middot; First-round review &middot; corrections required',
      body: `
        <p>Dear Northwood AE,</p>
        <p>Thank you for your tenant-improvement submittal for the cafe at 2240 Lake Road, Suite C. We have completed
        first-round review. The use change from Group M to Group A-2 triggers several items that must be addressed
        before we can issue:</p>

        <p><strong>1. Egress travel distance (IBC 1006.2.1, Table 1006.2.1)</strong><br/>
        Travel distance from the rear seating area is shown at 82'-0". A-2 occupancies with a single exit are limited
        to 75'-0". Please add a second exit (the rear service door from the kitchen is a good candidate if hardware
        and signage are upgraded) or rearrange seating to bring travel distance under the limit.</p>

        <p><strong>2. Plumbing fixture count (IBC Table 2902.1; WI SPS 382.40)</strong><br/>
        At 48 occupants, A-2 requires 2 water closets and 2 lavatories. The single unisex restroom shown is
        insufficient. Please add a second restroom. Wisconsin allows gender-neutral configurations.</p>

        <p><strong>3. Accessibility -- restroom turning space (IBC 1101.2; ANSI A117.1 &sect;304.3.1)</strong><br/>
        As-built turning radius is 53"; code requires 60". This alteration triggers compliance. Reconfigure to provide
        a 60" turning circle. We recommend coordinating this with item 2 above.</p>

        <p><strong>4. Kitchen makeup-air documentation (IMC 508.1)</strong><br/>
        Sheet M2.0 documents 450 cfm exhaust but does not call out makeup air. Please provide MUA calculations
        demonstrating &ge;360 cfm, or document a transfer-air pathway.</p>

        <p><strong>Notes:</strong> Fire alarm scope and lighting power density are both compliant; no further action
        required on those items.</p>

        <p>Please respond with revised drawings within 30 days. Happy to schedule a pre-resubmittal call if helpful
        -- reach out anytime.</p>

        <p>Sincerely,<br/>
        D. Halloran<br/>
        Senior Plan Reviewer, Maple Bluff Building Inspection</p>
      `,
    },
  },

  solar: {
    docTitle: 'PRMT-2026-0623 &middot; Rooftop PV',
    juris: 'Caldera County, NM (pop. 47,300)',
    code: '2023 NMRC, 2023 NEC',
    reviewer: 'R. Begay (auto-routed)',
    pages: 6,
    docContent: `
      <div class="font-semibold mb-2">PERMIT APPLICATION &middot; ROOFTOP SOLAR PV</div>
      <div class="opacity-70 mb-3 text-[11px] mono">Submittal: 11 Jun 2026 &middot; Installer: Sunshare Co-op</div>
      <div class="mb-3"><span class="opacity-60">Project:</span> Residential rooftop PV, 8.4 kW DC</div>
      <div class="mb-3"><span class="opacity-60">Address:</span> 87 Pinon Ridge Rd</div>
      <div class="mb-3"><span class="opacity-60">Roof:</span> 1991, comp shingle, asphalt, 6:12 pitch</div>
      <div class="mb-3"><span class="opacity-60">Modules:</span> 22 &times; 380W (REC Alpha-series)</div>
      <div class="mb-3"><span class="opacity-60">Inverter:</span> Enphase IQ8M micro (string per module)</div>
      <div class="mb-3"><span class="opacity-60">Mounting:</span> IronRidge XR1000 rail, flashed feet</div>
      <div class="mb-3"><span class="opacity-60">Setbacks shown:</span></div>
      <div class="ml-3 mb-3 text-[12px]">
        Ridge: <span class="num">36"</span><br/>
        Eaves: <span class="num">18"</span><br/>
        <span style="background: var(--accent-soft);">Hip (E): <span class="num">14"</span></span>
      </div>
      <div class="mb-3 opacity-60 text-[11px]">Sheets: PV1 site/array; PV2 mount detail; PV3 line diagram; PV4 placard; PV5 structural calc; PV6 fire-access plan</div>
    `,
    steps: [
      { ms: 500, text: 'Reading PV submittal (6 sheets)&hellip;', detail: '8.4 kW DC, 22 modules, microinverters per module' },
      { ms: 1200, text: 'Confirming code basis', detail: 'Caldera County adopted 2023 NMRC + 2023 NEC effective 2025-Q3' },
      { ms: 2000, text: 'Checking setbacks for fire access (IRC R324.6, IFC 1204.2)', detail: 'Ridge 36" ok &middot; Eaves 18" ok &middot; Hip (E) 14" -- flagged' },
      { ms: 2700, text: 'Reviewing structural calc (PV5)', detail: 'Dead load 3.1 psf added; existing rafter 2x6 @ 24" o.c. with calcs showing acceptable margin' },
      { ms: 3400, text: 'Verifying labeling per NEC 690.13(B), 690.56(C)', detail: 'Placards on PV4 conform to current NEC requirements' },
      { ms: 4100, text: 'Reviewing rapid-shutdown compliance (NEC 690.12)', detail: 'Microinverters provide module-level shutdown; conforms to 690.12(B)(2)' },
      { ms: 4700, text: 'Reviewing roof condition (advisory)', detail: '1991 roof -- nearing end of typical service life. Note for applicant.' },
      { ms: 5300, text: 'Compiling findings &amp; drafting reviewer letter', detail: '1 issue flagged, 1 advisory note, draft ready for R. Begay review' },
    ],
    issues: [
      {
        ms: 2300,
        severity: 'high',
        category: 'Fire access',
        title: 'East hip setback below required minimum',
        body: 'Sheet PV1 shows east hip setback at <span class="num">14"</span>. IFC 1204.2.1 (per 2023 NMRC reference) requires <span class="num">18"</span> minimum from any hip or ridge for residential PV arrays.',
        cite: 'IFC 1204.2.1; 2023 NMRC R324.6',
        suggested: 'Shift the easternmost row by ≥4" or remove one module from the east edge. Update PV1 site drawing and PV6 fire-access plan accordingly.',
      },
      {
        ms: 4900,
        severity: 'info',
        category: 'Note',
        title: 'Roof age advisory',
        body: 'The existing roof is 35 years old. Although not a code issue at the time of permit, removal and reinstallation of a PV array for re-roofing typically costs $2,000-3,500 if done within 5 years. We routinely flag this so the applicant can decide whether to re-roof first.',
        cite: 'Advisory only',
        suggested: null,
      },
    ],
    letter: {
      subject: 'PRMT-2026-0623 &middot; First-round review &middot; minor correction',
      body: `
        <p>Dear Sunshare Co-op,</p>
        <p>Thank you for your rooftop PV submittal at 87 Pinon Ridge Road. The submittal is generally well-prepared.
        We have one item to address before issuance:</p>

        <p><strong>1. East hip setback (IFC 1204.2.1; 2023 NMRC R324.6)</strong><br/>
        Sheet PV1 shows the east hip setback at 14". Code requires 18" minimum from any hip or ridge for arrays of
        this size. Please shift the easternmost row or remove the easternmost module, and update both PV1 and the
        PV6 fire-access plan to match.</p>

        <p><strong>Advisory note:</strong> The roof is 35 years old. We mention this only because removing and
        reinstalling the array for a future reroof is a meaningful cost. The applicant may want to factor this into
        their planning. This is not a code issue at this time.</p>

        <p>Structural, labeling, and rapid-shutdown items all conform to current NEC and NMRC requirements.</p>

        <p>Please respond with a revised PV1 / PV6 within 14 days. Once received we expect to issue without further
        review.</p>

        <p>Sincerely,<br/>
        R. Begay<br/>
        Plan Reviewer, Caldera County Building Department</p>
      `,
    },
  },
};
