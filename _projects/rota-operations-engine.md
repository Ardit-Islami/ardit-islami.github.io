---
title: "24/7 Rota Consequence Engine"
description: "A sanitised reference implementation modelling how 24/7 rota changes affect TOIL, payments, cover, approvals and final shift visibility."
image: "/assets/images/rota-engine-teaser.jpg"
teaser: "/assets/images/rota-engine-teaser.jpg"
hero_image: "/assets/images/rota-engine-hero.png"
mobile_hero_image: "/assets/images/rota-engine-hero.png"
hero_alt: "Conceptual visual showing rota baseline, workflow events, consequences, audit trail and trusted view."
hero_caption: "Sanitised conceptual visual. Public screenshots and diagrams use fictional support-team data and do not expose real operational records."
date: 2026-05-13
published: true
featured: true
spotlight: true
spotlight_order: 10
include_in_project_nav: false
category: "systems"
layout: case-study
page_css: case-study.css
collection: projects
project_type: "Flagship systems case study"
status: "Prototype and sanitised reference implementation"
flagship_type: "systems"
case_study_level: "full"
has_architecture: true
has_workflow: true
has_validation: true
has_gallery: true
has_video: false
has_appendix: true
tags: ["SQL Server", "FastAPI", "HTMX", "Jinja2", "pyodbc", "Workflow Modelling", "Data Architecture", "Read Models", "Systems Design"]
github_url:
demo_url:
case_study_url:
snapshot:
  - label: "Problem"
    value: "Rota changes create linked schedule, TOIL, payment, approval and audit consequences."
  - label: "Built"
    value: "A SQL Server and FastAPI/HTMX prototype with workflow state, derived effects and trusted read models."
  - label: "Evidence"
    value: "Architecture diagrams, workflow examples, validation checks and interface-ready evidence modules."
  - label: "Boundary"
    value: "Personal prototype using fictionalised/sanitised data, not production payroll or HR software."
evidence_hub:
  - label: "Story"
    title: "Short case"
    text: "The project in one guided read."
    href: "#short-case"
  - label: "Model"
    title: "Architecture"
    text: "Layered truth model and read-model projection."
    href: "#architecture"
  - label: "Flow"
    title: "Workflow example"
    text: "SICK → Cover → TOIL/payment consequences."
    href: "#workflow-example"
  - label: "Proof"
    title: "Validation"
    text: "Checks used to prove consequences stayed consistent."
    href: "#validation"
  - label: "Media"
    title: "Gallery"
    text: "Diagrams and future screenshot/video slots."
    href: "#gallery"
  - label: "Depth"
    title: "Appendix"
    text: "Extra notes without overloading the main page."
    href: "#appendix"
case_nav:
  - label: "Short case"
    href: "#short-case"
  - label: "Architecture"
    href: "#architecture"
  - label: "Workflow"
    href: "#workflow-example"
  - label: "Validation"
    href: "#validation"
  - label: "Gallery"
    href: "#gallery"
  - label: "Appendix"
    href: "#appendix"
---

<section class="flagship-section" id="short-case">
  <div class="flagship-section-heading">
    <p class="section-eyebrow">The short case</p>
    <h2>Not just a rota calendar</h2>
    <p>The visible rota was only the surface. The harder problem was preserving causality when operational changes affect multiple downstream records.</p>
  </div>

  <div class="short-case-grid">
    <div class="prose-block">
      <p>I built this project to push beyond day-to-day SQL querying into deeper system design: schema boundaries, stored procedures, workflow tables, derived effects, read models and validation logic.</p>

      <p>The core design challenge was that a rota change is rarely just a calendar edit. A sickness record, cover assignment, reassignment or swap can affect primary shift visibility, supplemental work, TOIL movement, payment adjustments, approval state and audit history. If those consequences are inferred loosely, the final rota can look correct while the underlying truth is inconsistent.</p>

      <p>The solution became a layered operational model. Generated rota rows stay as baseline truth. Workflow rows record what changed and why. Derived effect tables store TOIL and payment consequences. Read models project the trusted operational view used by the interface.</p>

      <p>The strongest lesson was architectural: the system became easier to reason about once each layer owned one type of truth. Instead of one broad “change shift” concept, the model separates annual leave, sickness, cover, reassignment and swaps by their operational meaning.</p>
    </div>

    <aside class="proof-note">
      <strong>What this demonstrates</strong>
      <p>SQL depth, workflow modelling, backend architecture, testable consequences, operational reasoning and public-safe technical communication.</p>
    </aside>
  </div>
</section>

<section class="flagship-section" id="architecture">
  <div class="flagship-section-heading">
    <p class="section-eyebrow">Architecture</p>
    <h2>Layered truth model</h2>
    <p>The key decision was to avoid overwriting generated rota truth directly.</p>
  </div>

  <figure class="case-media">
    <img src="/assets/images/projects/rota/rota-layered-operational-model.svg" alt="Layered operational model diagram showing configuration truth, generated baseline truth, workflow truth, derived effects and trusted read models">
    <figcaption><strong>Layered operational model:</strong> configuration truth feeds generated baseline truth; workflows record operational changes; derived effects store TOIL and payment consequences; read models project the final operational view.</figcaption>
  </figure>

  <div class="case-card-grid">
    <div class="case-card"><h3>Configuration truth</h3><p>Staff scope, profiles, shift types, rota pattern versions, pattern slots, payment rules and TOIL causality configuration.</p></div>
    <div class="case-card"><h3>Generated baseline truth</h3><p>Pattern-generated rota rows and generated TOIL links provide the original reference state.</p></div>
    <div class="case-card"><h3>Workflow truth</h3><p>Annual leave, sickness, cover, reassignment, swaps, approval, rejection and cancellation state.</p></div>
    <div class="case-card"><h3>Derived effects</h3><p>Payment events, TOIL resolution, TOIL events and TOIL schedule adjustments linked back to parent workflows.</p></div>
    <div class="case-card"><h3>Trusted read models</h3><p>Effective primary schedule, supplemental work, TOIL occurrence projection, bank balance and payment-event reporting.</p></div>
  </div>
</section>

<section class="flagship-section" id="workflow-example">
  <div class="flagship-section-heading">
    <p class="section-eyebrow">Workflow example</p>
    <h2>SICK → Cover → Payment / TOIL consequences</h2>
    <p>One scenario is enough to show why the project is more than a shift viewer.</p>
  </div>

  <figure class="case-media">
    <img src="/assets/images/projects/rota/rota-sick-cover-consequence-flow.svg" alt="Sickness cover consequence flow showing absence, cover assignment, extra payment, TOIL handling and trusted views">
    <figcaption><strong>Example consequence chain:</strong> sickness on an OOH shift can create a coverage gap, trigger cover, create extra payment for the coverer, move or bank TOIL, and update final read models.</figcaption>
  </figure>

  <div class="case-card-grid">
    <div class="case-card"><h3>Absence changes primary truth</h3><p>The original generated shift remains auditable, but the effective primary view reflects the approved absence.</p></div>
    <div class="case-card"><h3>Cover is supplemental</h3><p>The coverer does not simply replace the absent worker’s row. Cover creates an additional work event with its own consequences.</p></div>
    <div class="case-card"><h3>Consequences are explicit</h3><p>Payment and TOIL outcomes are stored as derived effect rows rather than guessed from the final display.</p></div>
  </div>
</section>

<section class="flagship-section" id="validation">
  <div class="flagship-section-heading">
    <p class="section-eyebrow">Validation</p>
    <h2>Testing the consequence chain</h2>
    <p>The project needed evidence that workflow scenarios created the expected truth-state, not just successful UI interactions.</p>
  </div>

  <div class="case-tabs" data-case-tabs>
    <div class="case-tab-list" role="tablist" aria-label="Technical deep dive sections">
      <button class="case-tab is-active" type="button" role="tab" aria-selected="true" data-case-tab-target="architecture">Architecture checks</button>
      <button class="case-tab" type="button" role="tab" aria-selected="false" data-case-tab-target="workflow">Workflow logic</button>
      <button class="case-tab" type="button" role="tab" aria-selected="false" data-case-tab-target="interface">Interface evidence</button>
      <button class="case-tab" type="button" role="tab" aria-selected="false" data-case-tab-target="boundaries">Boundaries</button>
    </div>

    <div class="case-tab-panel is-active" role="tabpanel" data-case-tab-panel="architecture">
      <div class="case-card-grid">
        <div class="case-card"><h3>No duplicate primary rows</h3><p>Effective schedule projection must not create competing primary truth for the same staff/date.</p></div>
        <div class="case-card"><h3>No orphaned effects</h3><p>Payment, TOIL and schedule adjustment rows should remain linked to the workflow that caused them.</p></div>
        <div class="case-card"><h3>Cancellation unwinds effects</h3><p>Cancelled workflows should no longer influence trusted operational views.</p></div>
      </div>
    </div>

    <div class="case-tab-panel" role="tabpanel" data-case-tab-panel="workflow" hidden>
      <div class="case-card-grid">
        <div class="case-card"><h3>Annual leave / sickness</h3><p>Replacement workflows alter effective primary state while keeping baseline rows intact.</p></div>
        <div class="case-card"><h3>Cover</h3><p>Cover is supplemental work and can create OOH extra payment plus TOIL transfer or banking effects.</p></div>
        <div class="case-card"><h3>Reassignment / swaps</h3><p>Different workflow families are separated so same-looking rota actions can carry different consequences.</p></div>
      </div>
    </div>

    <div class="case-tab-panel" role="tabpanel" data-case-tab-panel="interface" hidden>
      <div class="case-card-grid">
        <div class="case-card"><h3>Daily board</h3><p>Designed to show final operational coverage and surface redirected or supplemental work clearly.</p></div>
        <div class="case-card"><h3>Workflow launcher</h3><p>Administrative workflows are routed through structured preflight, submit and decision paths.</p></div>
        <div class="case-card"><h3>Ledger views</h3><p>TOIL and payment evidence can be exposed as reviewable operational records.</p></div>
      </div>
    </div>

    <div class="case-tab-panel" role="tabpanel" data-case-tab-panel="boundaries" hidden>
      <div class="boundary-note">
        <strong>Public-safe boundary</strong>
        <p>This is a personal prototype and sanitised reference implementation. It is not production payroll, HR, legal-compliance, or enterprise workforce-management software. No real staff, customer or operational data is published.</p>
      </div>
    </div>
  </div>
</section>

<section class="flagship-section" id="gallery">
  <div class="flagship-section-heading">
    <p class="section-eyebrow">Media gallery</p>
    <h2>Evidence without loading every asset into the main scroll</h2>
    <p>Diagrams open in a modal. Later, real screenshots and walkthrough videos can use the same pattern.</p>
  </div>

  <div class="case-media-gallery">
    <button class="media-thumb" type="button" data-modal-src="/assets/images/projects/rota/rota-layered-operational-model.svg" data-modal-title="Layered operational model" data-modal-caption="Configuration, generated baseline, workflow, derived effects and read models." data-modal-type="image">
      <img src="/assets/images/projects/rota/rota-layered-operational-model.svg" alt="Layered operational model thumbnail">
      <span>Layered operational model</span>
    </button>
    <button class="media-thumb" type="button" data-modal-src="/assets/images/projects/rota/rota-controlled-workflow-lifecycle.svg" data-modal-title="Controlled workflow lifecycle" data-modal-caption="Preflight, pending state, approval, consequence creation, read model update and cancellation." data-modal-type="image">
      <img src="/assets/images/projects/rota/rota-controlled-workflow-lifecycle.svg" alt="Controlled workflow lifecycle thumbnail">
      <span>Controlled workflow lifecycle</span>
    </button>
    <button class="media-thumb" type="button" data-modal-src="/assets/images/projects/rota/rota-operational-truth-audit.svg" data-modal-title="Operational truth audit" data-modal-caption="Checks used to reason about final schedule, TOIL and payment consistency." data-modal-type="image">
      <img src="/assets/images/projects/rota/rota-operational-truth-audit.svg" alt="Operational truth audit thumbnail">
      <span>Operational truth audit</span>
    </button>
    <button class="media-thumb" type="button" data-modal-src="/assets/images/projects/rota/rota-primary-supplemental-truth.svg" data-modal-title="Primary vs supplemental truth" data-modal-caption="Separating primary schedule projection from additional work such as cover." data-modal-type="image">
      <img src="/assets/images/projects/rota/rota-primary-supplemental-truth.svg" alt="Primary versus supplemental truth thumbnail">
      <span>Primary vs supplemental truth</span>
    </button>
  </div>
</section>

<section class="flagship-section" id="appendix">
  <div class="flagship-section-heading">
    <p class="section-eyebrow">Appendix</p>
    <h2>Deeper notes, available on demand</h2>
    <p>These sections preserve technical depth without forcing every reader through the entire implementation story.</p>
  </div>

  <div class="case-appendix">
    <details>
      <summary>Legacy diagnosis</summary>
      <div class="appendix-content">
        <p>The project began with investigation into how an older rota setup could continue displaying schedule rows while derived consequences became unreliable. That led to the core design lesson: identify which layer owns the truth before patching symptoms.</p>
      </div>
    </details>

    <details>
      <summary>Workflow family taxonomy</summary>
      <div class="appendix-content">
        <p>Annual leave and sickness replace primary state. Cover creates supplemental work. Reassignment models one-way substitution or redirection. Same-date swaps model reciprocal movement with separate payment and TOIL treatment rules.</p>
      </div>
    </details>

    <details>
      <summary>Primary vs supplemental truth</summary>
      <div class="appendix-content">
        <p>The system separates effective primary schedule from supplemental work so a cover assignment does not corrupt the original rota pattern or primary shift ownership.</p>
      </div>
    </details>

    <details>
      <summary>Future direction</summary>
      <div class="appendix-content">
        <p>The reusable idea is not another generic rota calendar. The stronger direction is a consequence and reconciliation layer for complex 24/7 operations, with managed rota truth, import/reconciliation mode, or report-only audit mode.</p>
      </div>
    </details>
  </div>
</section>
