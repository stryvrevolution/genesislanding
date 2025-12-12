/**
 * WorkoutPanel Component
 * Style: Infographic technique inspiré de l'image
 * Affiche un panneau de programme d'entraînement avec style data-driven
 */

export default function WorkoutPanel({ title = "ELEVATE_03.1", sequence = "#SEQ.ACT-3A.5.12" }) {
  return (
    <div className="relative bg-overlay-offWhite border-2 border-border-dark p-8 md:p-12 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h2 className="font-primary text-4xl md:text-5xl text-text-primary tracking-tighter">
            {title}
          </h2>
          <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-accent-primary"></div>
        </div>
        <p className="font-mono text-sm text-text-secondary tracking-wider">
          {sequence}
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Left Column - Workout Parameters */}
        <div>
          <h3 className="font-primary text-xl text-text-primary mb-4 tracking-tight">
            WEPK 3
          </h3>
          <div className="space-y-2 font-mono text-sm text-text-secondary">
            <div>REP MODE +1</div>
            <div>OUTPUT LOAD 80-90%</div>
            <div>THRESHOLD. (RPE 8-9)</div>
            <div className="mt-4">MOVEMENT PROTOCOL:</div>
            <div>PROGRESS BEYOND</div>
            <div>TARGET REP</div>
          </div>
        </div>

        {/* Right Column - Conditioning */}
        <div>
          <h3 className="font-primary text-xl text-text-primary mb-4 tracking-tight">
            CONDITIONING NODE
          </h3>
          <div className="space-y-2 font-mono text-sm text-text-secondary">
            <div>CARDIO PHASE 2</div>
            <div>Fra denty (2x LISS, 1 HIT)</div>
            <div>MOOALITY 8min</div>
            <div>LISS intervals</div>
            <div>8-10min sprint intervals</div>
            <div className="mt-4">PHASE LOAD</div>
            <div className="relative pt-2">
              <div className="text-text-muted italic">pushing threshood white</div>
              <div className="text-text-muted italic">maintaining recovery</div>
              <div className="absolute bottom-0 left-0 right-0 border-b-2 border-dashed border-accent-primary opacity-50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Week Split */}
      <div className="mb-8">
        <h3 className="font-primary text-xl text-text-primary mb-4 tracking-tight">
          A-WEEK SPLIT PATHWAY
        </h3>
        <div className="space-y-2 font-mono text-sm text-text-secondary">
          <div>★ MON --- PUSH A --- CHEST FOCUS</div>
          <div>★ TUE --- PULL A --- LAT FOCUS</div>
          <div>★ WED --- LEGS A --- QUAD FOCUS</div>
          <div>THU --- PUSH B --- DELT FOCUS</div>
          <div>FRI --- PULL B --- UPPER BACK FOCUS</div>
          <div>SAT --- LEGS B --- GLUTE FOCUSED</div>
          <div>SUN --- RECOVERY—MOBILITY + CNS DRAINAGE</div>
        </div>
      </div>

      {/* System Init Goal */}
      <div className="border-t-2 border-border-dark pt-6">
        <h3 className="font-primary text-lg text-text-primary mb-2 tracking-tight">
          SYSTEM INIT GOAL:
        </h3>
        <p className="font-mono text-sm text-text-secondary">
          CONTINUE FOUNDATION WITHOUT SYSTEMIC FATIGUE
        </p>
        {/* Barcode-like graphic */}
        <div className="mt-4 flex gap-1">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="h-8 bg-text-primary"
              style={{ width: `${Math.random() * 3 + 1}px` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Overlay technical data (semi-transparent) */}
      <div className="absolute top-4 left-4 font-mono text-xs text-text-muted opacity-40">
        2779.25297714
      </div>
      <div className="absolute bottom-4 left-4 font-mono text-xs text-text-muted opacity-40 space-y-1">
        <div>&gt;&gt;&gt;&gt; VERIFY INT</div>
        <div>GLENOHUMERAL @00:43</div>
        <div>CONTROL SECTOR</div>
        <div>&gt;&gt;&gt; SIGNAL</div>
        <div>→VECT.SYNC: 121.00 STABIL</div>
        <div>→OFFSET: A+0.037 40.04</div>
        <div>-00.003</div>
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-xs text-text-muted opacity-40 [writing-mode:vertical-rl]">
        <div>FASCICULAR</div>
        <div>SCAPULOSPIN</div>
        <div>→DELTA RATE</div>
        <div>→ECHO: ASY</div>
      </div>
    </div>
  );
}

