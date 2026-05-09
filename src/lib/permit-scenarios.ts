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

export interface ChatMessage {
  ms: number;
  text: string;
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
  chatMessages: ChatMessage[];
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
      <div style="font-family: Arial, Helvetica, sans-serif; font-size: 11px; line-height: 17px; background: white; margin: -20px; padding: 20px;">

        <!-- City header -->
        <div style="text-align: center; margin-bottom: 10px; padding-bottom: 8px; border-bottom: 2px solid #1e3a6e;">
          <div style="font-size: 13px; font-weight: bold; letter-spacing: 0.12em; text-transform: uppercase; color: #1e3a6e;">City of Rivertown</div>
          <div style="font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase; color: #555; margin-top: 1px;">Department of Community Development</div>
          <div style="font-size: 9px; color: #888; margin-top: 1px;">PO Box 1 &middot; Rivertown OR 97401 &middot; (541) 555-0192</div>
          <div style="font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.08em; margin-top: 6px; color: #111;">Building Permit Application</div>
        </div>

        <!-- Permit ID row -->
        <div style="display: flex; gap: 8px; margin-bottom: 8px; padding-bottom: 7px; border-bottom: 1px solid #ddd;">
          <div style="flex: 1;">
            <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: #888;">Permit No.</div>
            <div style="font-family: 'Courier New', monospace; font-weight: bold; font-size: 11px;">PRMT-2026-0418</div>
          </div>
          <div style="flex: 1;">
            <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: #888;">Date Rec'd</div>
            <div style="font-family: 'Courier New', monospace; font-size: 11px;">04/14/2026</div>
          </div>
          <div style="flex: 1;">
            <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: #888;">Type</div>
            <div style="font-family: 'Courier New', monospace; font-size: 10px;">BLDG &ndash; ADU</div>
          </div>
        </div>

        <!-- Property -->
        <div style="margin-bottom: 8px; padding-bottom: 7px; border-bottom: 1px solid #ddd;">
          <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-bottom: 3px;">Property Information</div>
          <div><span style="color: #666;">Site address:</span> <span style="font-family: 'Courier New', monospace;">412 Willow Lane</span></div>
          <div><span style="font-family: 'Courier New', monospace;">Rivertown OR 97401</span></div>
          <div style="margin-top: 2px;"><span style="color: #666;">Parcel No.:</span> <span style="font-family: 'Courier New', monospace;">22E04DA-02200</span></div>
          <div style="margin-top: 2px; display: flex; gap: 12px;">
            <span><span style="color: #666;">Zone:</span> <span style="font-family: 'Courier New', monospace;">R-1</span></span>
            <span><span style="color: #666;">Lot area:</span> <span style="font-family: 'Courier New', monospace;">6,200 sf</span></span>
          </div>
        </div>

        <!-- Applicant -->
        <div style="margin-bottom: 8px; padding-bottom: 7px; border-bottom: 1px solid #ddd;">
          <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-bottom: 3px;">Applicant</div>
          <div style="font-weight: 600;">Cedar &amp; Beam Design-Build</div>
          <div style="color: #555; margin-top: 1px;">R. Thibodeau &middot; CCB-214892</div>
          <div style="color: #555;">(541) 555-0144</div>
        </div>

        <!-- Project -->
        <div style="margin-bottom: 8px; padding-bottom: 7px; border-bottom: 1px solid #ddd;">
          <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-bottom: 3px;">Project Description</div>
          <div>Detached ADU, single-story, wood frame</div>
          <div style="margin-top: 3px; display: flex; gap: 10px;">
            <span><span style="color: #666;">Area:</span> <span style="font-family: 'Courier New', monospace;">720 sf</span></span>
            <span><span style="color: #666;">Stories:</span> <span style="font-family: 'Courier New', monospace;">1</span></span>
            <span><span style="color: #666;">BR/BA:</span> <span style="font-family: 'Courier New', monospace;">1/1</span></span>
          </div>
          <div style="margin-top: 2px;"><span style="color: #666;">Est. valuation:</span> <span style="font-family: 'Courier New', monospace;">$148,500</span></div>
          <div style="margin-top: 2px;"><span style="color: #666;">Existing primary:</span> <span style="font-family: 'Courier New', monospace;">1,840 sf SFR (1972)</span></div>
        </div>

        <!-- Setbacks table -->
        <div style="margin-bottom: 8px; padding-bottom: 7px; border-bottom: 1px solid #ddd;">
          <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-bottom: 4px;">Setbacks &mdash; R-1 Zone (RTMC &sect;17.32)</div>
          <table style="width: 100%; border-collapse: collapse; font-size: 10.5px;">
            <thead>
              <tr style="border-bottom: 1px solid #ccc;">
                <th style="text-align: left; color: #888; font-weight: normal; padding-bottom: 2px;">Location</th>
                <th style="text-align: right; color: #888; font-weight: normal; padding-bottom: 2px;">Req.</th>
                <th style="text-align: right; color: #888; font-weight: normal; padding-bottom: 2px;">Prop.</th>
                <th style="text-align: center; color: #888; font-weight: normal; padding-bottom: 2px; width: 20px;">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 2px 0;">Front (Willow Ln)</td>
                <td style="font-family: 'Courier New', monospace; text-align: right;">20&apos;-0&quot;</td>
                <td style="font-family: 'Courier New', monospace; text-align: right;">22&apos;-0&quot;</td>
                <td style="text-align: center; color: #2d6a4f;">&#10003;</td>
              </tr>
              <tr>
                <td style="padding: 2px 0;">Side (East)</td>
                <td style="font-family: 'Courier New', monospace; text-align: right;">4&apos;-0&quot;</td>
                <td style="font-family: 'Courier New', monospace; text-align: right;">5&apos;-2&quot;</td>
                <td style="text-align: center; color: #2d6a4f;">&#10003;</td>
              </tr>
              <tr>
                <td style="padding: 2px 0;">Side (West)</td>
                <td style="font-family: 'Courier New', monospace; text-align: right;">4&apos;-0&quot;</td>
                <td style="font-family: 'Courier New', monospace; text-align: right;">4&apos;-9&quot;</td>
                <td style="text-align: center; color: #2d6a4f;">&#10003;</td>
              </tr>
              <tr style="background: #fde8de;">
                <td style="padding: 2px 0;">Rear *</td>
                <td style="font-family: 'Courier New', monospace; text-align: right;">4&apos;-0&quot;</td>
                <td style="font-family: 'Courier New', monospace; text-align: right; font-weight: bold;">3&apos;-6&quot;</td>
                <td style="text-align: center; color: #b8351a; font-weight: bold;">&#10007;</td>
              </tr>
            </tbody>
          </table>
          <div style="font-size: 8.5px; color: #888; margin-top: 3px;">* &gt;600 sf detached ADU per RTMC &sect;17.32.060(B)(2)</div>
        </div>

        <!-- Coverage -->
        <div style="margin-bottom: 8px; padding-bottom: 7px; border-bottom: 1px solid #ddd;">
          <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-bottom: 3px;">Lot Coverage</div>
          <div><span style="color: #666;">Existing:</span> <span style="font-family: 'Courier New', monospace;">2,320 sf (37.4%)</span></div>
          <div><span style="color: #666;">Proposed total:</span> <span style="font-family: 'Courier New', monospace;">3,040 sf (49.0%)</span></div>
          <div><span style="color: #666;">Max allowed:</span> <span style="font-family: 'Courier New', monospace;">55%</span> <span style="color: #2d6a4f;">&#10003;</span></div>
        </div>

        <!-- Sheet list -->
        <div style="margin-bottom: 8px; padding-bottom: 7px; border-bottom: 1px solid #ddd;">
          <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-bottom: 3px;">Sheet List (11 sheets)</div>
          <div style="font-family: 'Courier New', monospace; font-size: 9.5px; line-height: 15px; color: #555;">
            A0.0 Cover / notes<br/>
            A1.0 Site plan (1"=20')<br/>
            A2.0 Floor plan<br/>
            A2.1 Reflected ceiling<br/>
            A3.0 Elevations N/E<br/>
            A3.1 Elevations S/W<br/>
            A4.0 Sections / details<br/>
            A5.0 Misc. details<br/>
            S1.0 Foundation<br/>
            S2.0 Framing<br/>
            M-E-P Mech/Elec/Plumb
          </div>
        </div>

        <!-- Signature -->
        <div>
          <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-bottom: 3px;">Certification</div>
          <div style="font-size: 9px; color: #666; line-height: 14px; margin-bottom: 4px;">I certify the above information is accurate and work will conform to all applicable codes and ordinances of the City of Rivertown.</div>
          <div style="font-family: 'Courier New', monospace; font-size: 9.5px;">R. Thibodeau &mdash; 04/14/2026</div>
          <div style="font-size: 9px; color: #888;">CCB-214892</div>
        </div>

      </div>
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
    chatMessages: [
      { ms: 700, text: "Starting on PRMT-2026-0418. I have the 11-sheet ADU set open. Working through the site plan, floor plan, and elevations now." },
      { ms: 1500, text: "Jurisdiction confirmed: Rivertown, OR. Code basis is 2022 ORSC with RTMC Title 17 amendments through Q1 2026. Both loaded." },
      { ms: 2300, text: "Zoning check: R-1 lot at 6,200 sf, ADU at 720 sf — 11.6% of lot area. Cap is 15% under RTMC §17.24.080. No issue there." },
      { ms: 3100, text: "Found a setback problem on Sheet A1.0. Rear setback is shown at 3'-6\". RTMC §17.32.060(B)(2) requires 4'-0\" for a detached ADU over 600 sf. Flagging as a required correction." },
      { ms: 3800, text: "Second issue: bedroom egress window on A2.0 has a sill height of 46\". ORSC R310.2.2 caps it at 44\". Required correction — lower the sill or add a permanent step per the exception." },
      { ms: 5400, text: "Good news on parking. Parcel is in the transit overlay under RTMC §17.44.090 (added 2024). ADU parking minimums are waived. Nothing to flag on that." },
      { ms: 6600, text: "One more: west setback at 4'-9\" triggers the 1-hour fire-rated wall requirement per ORSC R302.1, Table R302.1(1). Sheet A3.1 doesn't call out a rated assembly. Medium priority." },
      { ms: 7300, text: "All done. Three findings: two required corrections (setback + egress), one medium clarification (fire-rated wall), one favorable note (transit overlay). Drafting the letter for your review now." },
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
      <div style="font-family: Arial, Helvetica, sans-serif; font-size: 11px; line-height: 17px; background: white; margin: -20px; padding: 20px;">

        <!-- City header -->
        <div style="text-align: center; margin-bottom: 10px; padding-bottom: 8px; border-bottom: 2px solid #2e4a1e;">
          <div style="font-size: 13px; font-weight: bold; letter-spacing: 0.12em; text-transform: uppercase; color: #2e4a1e;">Village of Maple Bluff</div>
          <div style="font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase; color: #555; margin-top: 1px;">Department of Building Inspection</div>
          <div style="font-size: 9px; color: #888; margin-top: 1px;">18 Oxford Place &middot; Maple Bluff WI 53704 &middot; (608) 555-0133</div>
          <div style="font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.08em; margin-top: 6px; color: #111;">Building Permit Application &mdash; Commercial TI</div>
        </div>

        <!-- Permit ID row -->
        <div style="display: flex; gap: 8px; margin-bottom: 8px; padding-bottom: 7px; border-bottom: 1px solid #ddd;">
          <div style="flex: 1;">
            <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: #888;">Permit No.</div>
            <div style="font-family: 'Courier New', monospace; font-weight: bold; font-size: 11px;">PRMT-2026-0511</div>
          </div>
          <div style="flex: 1;">
            <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: #888;">Date Rec'd</div>
            <div style="font-family: 'Courier New', monospace; font-size: 11px;">05/02/2026</div>
          </div>
          <div style="flex: 1;">
            <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: #888;">Type</div>
            <div style="font-family: 'Courier New', monospace; font-size: 10px;">TI &ndash; COMM</div>
          </div>
        </div>

        <!-- Property -->
        <div style="margin-bottom: 8px; padding-bottom: 7px; border-bottom: 1px solid #ddd;">
          <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-bottom: 3px;">Property Information</div>
          <div><span style="color: #666;">Address:</span> <span style="font-family: 'Courier New', monospace;">2240 Lake Road, Suite C</span></div>
          <div><span style="color: #666;">Parcel:</span> <span style="font-family: 'Courier New', monospace;">070-1021-214-0006</span></div>
          <div style="margin-top: 2px;"><span style="color: #666;">Building:</span> 1986 retail strip, Type V-B, sprinklered</div>
          <div style="margin-top: 1px; font-size: 9.5px; color: #666;">(NFPA 13R retrofit 2014)</div>
        </div>

        <!-- Applicant -->
        <div style="margin-bottom: 8px; padding-bottom: 7px; border-bottom: 1px solid #ddd;">
          <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-bottom: 3px;">Applicant / Architect</div>
          <div style="font-weight: 600;">Northwood AE</div>
          <div style="color: #555; margin-top: 1px;">J. Lindgren, AIA &middot; A/E-11042</div>
          <div style="color: #555;">(608) 555-0177</div>
        </div>

        <!-- Use change -->
        <div style="margin-bottom: 8px; padding-bottom: 7px; border-bottom: 1px solid #ddd;">
          <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-bottom: 3px;">Occupancy / Use Change</div>
          <div style="display: flex; gap: 12px;">
            <div><span style="color: #666;">Existing:</span> <span style="font-family: 'Courier New', monospace;">Group M (retail)</span></div>
          </div>
          <div style="display: flex; align-items: center; gap: 8px; margin-top: 2px;">
            <span style="color: #666;">Proposed:</span>
            <span style="font-family: 'Courier New', monospace; font-weight: bold;">Group A-2 (cafe, &lt;50 occ.)</span>
          </div>
        </div>

        <!-- Project scope -->
        <div style="margin-bottom: 8px; padding-bottom: 7px; border-bottom: 1px solid #ddd;">
          <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-bottom: 3px;">Project Scope</div>
          <div>Conversion of vacant bay to 38-seat cafe</div>
          <div style="margin-top: 3px; display: flex; gap: 10px;">
            <span><span style="color: #666;">TI area:</span> <span style="font-family: 'Courier New', monospace;">1,840 sf</span></span>
            <span><span style="color: #666;">Seats:</span> <span style="font-family: 'Courier New', monospace;">38 + 6 counter</span></span>
          </div>
          <div style="margin-top: 2px;"><span style="color: #666;">Kitchen:</span> Type II hood, no open flame</div>
          <div style="margin-top: 2px;"><span style="color: #666;">Restrooms:</span> 1 unisex (existing)</div>
          <div style="margin-top: 2px;"><span style="color: #666;">Est. valuation:</span> <span style="font-family: 'Courier New', monospace;">$312,000</span></div>
        </div>

        <!-- Occupant load -->
        <div style="margin-bottom: 8px; padding-bottom: 7px; border-bottom: 1px solid #ddd;">
          <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-bottom: 3px;">Occupant Load Calc (IBC 1004.5)</div>
          <table style="width: 100%; border-collapse: collapse; font-size: 10px;">
            <tr><td style="color: #666; padding: 1px 0;">Seated assembly (38 seats)</td><td style="font-family: 'Courier New', monospace; text-align: right;">38</td></tr>
            <tr><td style="color: #666; padding: 1px 0;">Counter seating (6 seats)</td><td style="font-family: 'Courier New', monospace; text-align: right;">6</td></tr>
            <tr><td style="color: #666; padding: 1px 0;">Staff (estimated)</td><td style="font-family: 'Courier New', monospace; text-align: right;">4</td></tr>
            <tr style="border-top: 1px solid #ddd; font-weight: bold;"><td style="padding-top: 2px;">Total design occupant load</td><td style="font-family: 'Courier New', monospace; text-align: right; padding-top: 2px;">48</td></tr>
          </table>
        </div>

        <!-- Sheet list -->
        <div style="margin-bottom: 8px; padding-bottom: 7px; border-bottom: 1px solid #ddd;">
          <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-bottom: 3px;">Sheet List (18 sheets)</div>
          <div style="font-family: 'Courier New', monospace; font-size: 9.5px; line-height: 15px; color: #555;">
            A0/A1.0 Cover &amp; site<br/>
            A2.0&ndash;A2.4 Floor/RCP/finish/egress<br/>
            A3.0 Elevations<br/>
            A4.0 Sections &amp; details<br/>
            M1.0&ndash;M2.1 Mechanical/exhaust<br/>
            P1.0&ndash;P2.0 Plumbing<br/>
            E1.0&ndash;E2.0 Electrical<br/>
            FA1.0 Fire alarm
          </div>
        </div>

        <!-- Signature -->
        <div>
          <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-bottom: 3px;">Certification</div>
          <div style="font-size: 9px; color: #666; line-height: 14px; margin-bottom: 4px;">I certify the information is accurate and all work will conform to applicable codes and ordinances.</div>
          <div style="font-family: 'Courier New', monospace; font-size: 9.5px;">J. Lindgren, AIA &mdash; 05/02/2026</div>
          <div style="font-size: 9px; color: #888;">A/E-11042</div>
        </div>

      </div>
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
    chatMessages: [
      { ms: 700, text: "Opening PRMT-2026-0511. 18-sheet TI set for the cafe at 2240 Lake Road, Suite C. This is a Group M to A-2 use change, so I'll work through egress, plumbing, accessibility, and mechanical." },
      { ms: 1500, text: "Code confirmed: 2021 IBC as adopted by Wisconsin SPS 361/362, Maple Bluff local amendments through Q4 2025." },
      { ms: 2300, text: "Use change from Group M (retail) to Group A-2 (cafe, <50 occupants) is correctly identified in the submittal. That's the trigger for most of what I'm about to flag." },
      { ms: 3800, text: "Egress issue. Sheet A2.4 shows the longest travel path at 82'-0\" from the rear seating area. Single-exit A-2 occupancy is limited to 75'-0\" per IBC 1006.2.1. They'll need a second exit or a rearranged floor plan." },
      { ms: 4900, text: "Plumbing is short. 48 occupants in A-2 requires 2 water closets and 2 lavatories per IBC Table 2902.1. One unisex is shown. Wisconsin allows gender-neutral configurations, but the count still has to be met." },
      { ms: 5600, text: "Mechanical: Type II hood at 450 cfm, but makeup air ratio isn't documented on M2.0. IMC 508.1 requires MUA at minimum 80% of exhaust — 360 cfm minimum. They need to add the calculation." },
      { ms: 6300, text: "Accessibility: existing restroom has 53\" turning space. A117.1 §304.3.1 requires 60\". The TI triggers alteration compliance. Worth coordinating with the second-fixture requirement — they can address both in one scope." },
      { ms: 8200, text: "Finished. Five findings: two required corrections (egress + plumbing), one accessibility correction, one mechanical documentation item. Fire alarm and energy compliance are both confirmed. Drafting the letter now." },
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
      <div style="font-family: Arial, Helvetica, sans-serif; font-size: 11px; line-height: 17px; background: white; margin: -20px; padding: 20px;">

        <!-- County header -->
        <div style="text-align: center; margin-bottom: 10px; padding-bottom: 8px; border-bottom: 2px solid #7a3b0a;">
          <div style="font-size: 13px; font-weight: bold; letter-spacing: 0.12em; text-transform: uppercase; color: #7a3b0a;">Caldera County</div>
          <div style="font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase; color: #555; margin-top: 1px;">Building &amp; Development Services</div>
          <div style="font-size: 9px; color: #888; margin-top: 1px;">County Annex B &middot; Caldera NM 87710 &middot; (505) 555-0148</div>
          <div style="font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.08em; margin-top: 6px; color: #111;">Residential Solar PV Permit Application</div>
        </div>

        <!-- Permit ID row -->
        <div style="display: flex; gap: 8px; margin-bottom: 8px; padding-bottom: 7px; border-bottom: 1px solid #ddd;">
          <div style="flex: 1;">
            <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: #888;">Permit No.</div>
            <div style="font-family: 'Courier New', monospace; font-weight: bold; font-size: 11px;">PRMT-2026-0623</div>
          </div>
          <div style="flex: 1;">
            <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: #888;">Date Rec'd</div>
            <div style="font-family: 'Courier New', monospace; font-size: 11px;">06/11/2026</div>
          </div>
          <div style="flex: 1;">
            <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: #888;">Type</div>
            <div style="font-family: 'Courier New', monospace; font-size: 10px;">ELEC &ndash; SOLAR</div>
          </div>
        </div>

        <!-- Property -->
        <div style="margin-bottom: 8px; padding-bottom: 7px; border-bottom: 1px solid #ddd;">
          <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-bottom: 3px;">Property Information</div>
          <div><span style="color: #666;">Address:</span> <span style="font-family: 'Courier New', monospace;">87 Pinon Ridge Road</span></div>
          <div><span style="color: #666;">Parcel:</span> <span style="font-family: 'Courier New', monospace;">R001-2047-018</span></div>
          <div style="margin-top: 2px;"><span style="color: #666;">Zoning:</span> <span style="font-family: 'Courier New', monospace;">R-R (Rural Residential)</span></div>
        </div>

        <!-- Applicant / Installer -->
        <div style="margin-bottom: 8px; padding-bottom: 7px; border-bottom: 1px solid #ddd;">
          <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-bottom: 3px;">Installer</div>
          <div style="font-weight: 600;">Sunshare Co-op</div>
          <div style="color: #555; margin-top: 1px;">D. Morales, Master Electrician</div>
          <div style="color: #555;">NM ME-014392 &middot; (505) 555-0201</div>
        </div>

        <!-- System specs -->
        <div style="margin-bottom: 8px; padding-bottom: 7px; border-bottom: 1px solid #ddd;">
          <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-bottom: 3px;">PV System Specifications</div>
          <div><span style="color: #666;">DC system size:</span> <span style="font-family: 'Courier New', monospace; font-weight: bold;">8.4 kW</span></div>
          <div style="margin-top: 2px;"><span style="color: #666;">Modules:</span> <span style="font-family: 'Courier New', monospace;">22 &times; 380W</span></div>
          <div style="font-size: 9.5px; color: #666; margin-top: 1px;">REC Alpha-series</div>
          <div style="margin-top: 2px;"><span style="color: #666;">Inverter:</span> <span style="font-family: 'Courier New', monospace;">Enphase IQ8M</span></div>
          <div style="font-size: 9.5px; color: #666; margin-top: 1px;">Microinverter per module</div>
          <div style="margin-top: 2px;"><span style="color: #666;">Mounting:</span> IronRidge XR1000 rail, flashed feet</div>
        </div>

        <!-- Roof info -->
        <div style="margin-bottom: 8px; padding-bottom: 7px; border-bottom: 1px solid #ddd;">
          <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-bottom: 3px;">Roof Information</div>
          <div style="display: flex; gap: 10px;">
            <span><span style="color: #666;">Year:</span> <span style="font-family: 'Courier New', monospace;">1991</span></span>
            <span><span style="color: #666;">Pitch:</span> <span style="font-family: 'Courier New', monospace;">6:12</span></span>
          </div>
          <div style="margin-top: 2px;"><span style="color: #666;">Material:</span> Composition shingle, asphalt</div>
        </div>

        <!-- Fire-access setbacks -->
        <div style="margin-bottom: 8px; padding-bottom: 7px; border-bottom: 1px solid #ddd;">
          <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-bottom: 4px;">Fire-Access Setbacks (IFC 1204.2)</div>
          <table style="width: 100%; border-collapse: collapse; font-size: 10.5px;">
            <thead>
              <tr style="border-bottom: 1px solid #ccc;">
                <th style="text-align: left; color: #888; font-weight: normal; padding-bottom: 2px;">Location</th>
                <th style="text-align: right; color: #888; font-weight: normal; padding-bottom: 2px;">Req.</th>
                <th style="text-align: right; color: #888; font-weight: normal; padding-bottom: 2px;">Prop.</th>
                <th style="text-align: center; color: #888; font-weight: normal; padding-bottom: 2px; width: 20px;">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 2px 0;">Ridge</td>
                <td style="font-family: 'Courier New', monospace; text-align: right;">18&quot;</td>
                <td style="font-family: 'Courier New', monospace; text-align: right;">36&quot;</td>
                <td style="text-align: center; color: #2d6a4f;">&#10003;</td>
              </tr>
              <tr>
                <td style="padding: 2px 0;">Eaves</td>
                <td style="font-family: 'Courier New', monospace; text-align: right;">18&quot;</td>
                <td style="font-family: 'Courier New', monospace; text-align: right;">18&quot;</td>
                <td style="text-align: center; color: #2d6a4f;">&#10003;</td>
              </tr>
              <tr style="background: #fde8de;">
                <td style="padding: 2px 0;">Hip (East) *</td>
                <td style="font-family: 'Courier New', monospace; text-align: right;">18&quot;</td>
                <td style="font-family: 'Courier New', monospace; text-align: right; font-weight: bold;">14&quot;</td>
                <td style="text-align: center; color: #b8351a; font-weight: bold;">&#10007;</td>
              </tr>
            </tbody>
          </table>
          <div style="font-size: 8.5px; color: #888; margin-top: 3px;">* Per IFC 1204.2.1 &amp; 2023 NMRC R324.6</div>
        </div>

        <!-- Sheet list -->
        <div style="margin-bottom: 8px; padding-bottom: 7px; border-bottom: 1px solid #ddd;">
          <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-bottom: 3px;">Sheet List (6 sheets)</div>
          <div style="font-family: 'Courier New', monospace; font-size: 9.5px; line-height: 15px; color: #555;">
            PV1 Site / array layout<br/>
            PV2 Mounting detail<br/>
            PV3 Single-line diagram<br/>
            PV4 Required placards<br/>
            PV5 Structural calc<br/>
            PV6 Fire-access plan
          </div>
        </div>

        <!-- Signature -->
        <div>
          <div style="font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-bottom: 3px;">Certification</div>
          <div style="font-size: 9px; color: #666; line-height: 14px; margin-bottom: 4px;">I certify the information is accurate and work will conform to all applicable codes of Caldera County and the State of New Mexico.</div>
          <div style="font-family: 'Courier New', monospace; font-size: 9.5px;">D. Morales &mdash; 06/11/2026</div>
          <div style="font-size: 9px; color: #888;">NM ME-014392</div>
        </div>

      </div>
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
    chatMessages: [
      { ms: 600, text: "Opening PRMT-2026-0623. 6-sheet rooftop PV set — 8.4 kW DC, 22 modules with Enphase microinverters. This should be a quick one." },
      { ms: 1300, text: "Code basis confirmed: 2023 NMRC and 2023 NEC, both adopted by Caldera County effective Q3 2025." },
      { ms: 2100, text: "Fire-access setback issue on Sheet PV1. Ridge at 36\" and eaves at 18\" are both fine, but the east hip setback is at 14\". IFC 1204.2.1 requires 18\" from any hip or ridge. That's a required correction." },
      { ms: 2800, text: "Structural calc on PV5 looks solid. 3.1 psf added dead load is within the margin for the existing 2x6 rafters at 24\" o.c." },
      { ms: 3500, text: "Labeling on PV4 is current — NEC 690.13(B) and 690.56(C) requirements are met." },
      { ms: 4200, text: "Rapid shutdown: Enphase IQ8M microinverters provide module-level shutdown. That satisfies NEC 690.12(B)(2). Compliant." },
      { ms: 4800, text: "One advisory note: the roof is 35 years old. Not a code issue, but pulling the array for a future reroof costs $2,000-3,500. Worth flagging so the applicant can plan ahead." },
      { ms: 5500, text: "Done. One required correction — east hip setback at 14\" needs to move to 18\" minimum. Update PV1 and PV6. Everything else checks out. Drafting the letter." },
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
