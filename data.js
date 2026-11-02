/* ------------------------------------------------------------------
   A Level Religious Studies – starter knowledge bank
   Board-agnostic: map these cards to YOUR specification using the
   Spec tracker (add / import your own spec points, or edit this file).

   Card format:
   { id, topic, title, q (short noun phrase used in questions),
     thinker, summary[], why[], terms[{t,d}], strengths[], weaknesses[] }
------------------------------------------------------------------- */
window.RS_DATA = {
  topics: [
    "Religious Language",
    "Arguments for the Existence of God",
    "The Problem of Evil",
    "Religious Experience",
    "Ethical Theories"
  ],
  cards: [

    /* ============================ RELIGIOUS LANGUAGE ============================ */
    {
      id: "rl-via-negativa",
      topic: "Religious Language",
      title: "Via negativa (apophatic way)",
      q: "the via negativa",
      thinker: "Pseudo-Dionysius and Maimonides",
      summary: [
        "God is wholly transcendent and beyond human categories, so positive descriptions (e.g. 'God is good') inevitably mislead.",
        "We can only say what God is NOT (not finite, not changing, not evil): knowledge by negation.",
        "Pseudo-Dionysius (Mystical Theology) taught that God is beyond both affirmation and denial; Maimonides (Guide for the Perplexed) argued that negative attributes are the only safe route to speaking of God.",
        "Contrasted with the cataphatic way (via positiva), which makes positive statements about God."
      ],
      why: [
        "To protect God's transcendence and ineffability: God is not an object within the universe that human words can capture.",
        "To avoid anthropomorphism and idolatry, where positive language risks turning God into a human-like being.",
        "Rooted in mystical experience, which is often reported as beyond words, and in scriptural warnings against images of God."
      ],
      terms: [
        { t: "apophatic", d: "'speaking away': theology that proceeds by negation" },
        { t: "cataphatic", d: "theology that proceeds by positive statements about God" },
        { t: "transcendent", d: "beyond the physical universe and beyond human understanding" },
        { t: "ineffable", d: "too great or too different to be expressed in words" }
      ],
      strengths: [
        "Safeguards divine transcendence and avoids idolatry.",
        "Fits mystical experience and traditions of silence, awe and contemplation.",
        "Makes few positive claims, so it largely avoids the verification and falsification challenges."
      ],
      weaknesses: [
        "Says nothing positive, so it is hard to see how believers can worship or pray to a God known only through negations; Aquinas valued it but argued it must be supplemented by analogy.",
        "Negations presuppose some positive content: to say God is 'not evil' assumes we already grasp 'good'.",
        "Scripture and worship make positive claims about God (e.g. creator, loving), which sit awkwardly with a purely negative approach."
      ]
    },
    {
      id: "rl-aquinas-analogy",
      topic: "Religious Language",
      title: "Aquinas' analogy",
      q: "Aquinas' analogical approach to religious language",
      thinker: "Thomas Aquinas",
      summary: [
        "Univocal language (same meaning for God and humans) makes God human-like; equivocal language (completely different meaning) makes God-talk meaningless. Aquinas takes a middle path: analogy.",
        "Analogy of attribution: qualities such as goodness come from God as their cause, so we can call God good as the source of the goodness we see (as healthy food causes a healthy animal).",
        "Analogy of proportion: God has attributes in a way proportionate to the divine nature. Human wisdom or love is finite; God's is infinite (a common example: a dog and a human can both be 'faithful', but in ways proportionate to each).",
        "Developed in the Summa Theologica (Part 1, question 13), drawing on Aristotle's idea of analogical predication."
      ],
      why: [
        "To solve the dilemma between apophatic language, which gives no positive knowledge, and univocal language, which is anthropomorphic.",
        "To allow believers to speak meaningfully and truthfully about God, as worship, scripture and theology require.",
        "Reflects his natural theology: creation reflects its Creator, so created qualities give genuine (though limited) insight into God."
      ],
      terms: [
        { t: "univocal", d: "a word has exactly the same meaning when applied to different things" },
        { t: "equivocal", d: "a word has completely different meanings when applied to different things" },
        { t: "analogy of attribution", d: "a quality is predicated of God because God is its cause" },
        { t: "analogy of proportion", d: "a quality belongs to God proportionately to God's infinite nature" }
      ],
      strengths: [
        "Preserves meaningful, positive God-talk while respecting divine transcendence.",
        "Grounded in the creator–creation relationship, giving analogy a rational basis.",
        "Highly influential in Catholic theology and developed by later thinkers such as Ian Ramsey."
      ],
      weaknesses: [
        "We have no independent access to God's nature, so how can we judge what is 'proportionate'? (an empiricist objection in the style of Hume or Ayer).",
        "Analogy of attribution assumes God is the source of goodness, which is complicated by the existence of evil.",
        "Empiricists such as Ayer argue the claims remain unverifiable and so meaningless.",
        "The analogy risks collapsing into equivocation if the difference between divine and human goodness is too great."
      ]
    },
    {
      id: "rl-ramsey",
      topic: "Religious Language",
      title: "Ramsey: models and qualifiers",
      q: "Ramsey's models and qualifiers",
      thinker: "Ian Ramsey",
      summary: [
        "Religious language works through models (familiar ideas such as 'good', 'father', 'wise') and qualifiers (words such as 'infinitely', 'perfectly') that push the model beyond ordinary experience.",
        "In 'God is infinitely good', 'good' is the model and 'infinitely' is the qualifier.",
        "Such language aims to evoke a 'disclosure' (a moment of insight where the 'penny drops') and a total commitment, rather than merely describe.",
        "Developed in Religious Language (1957) as a refinement of the analogical tradition."
      ],
      why: [
        "To show that religious language can be meaningful without being verifiable in a positivist sense.",
        "To update Aquinas' analogy for a modern, empirically minded audience by explaining how finite words can point to the infinite."
      ],
      terms: [
        { t: "model", d: "a familiar human quality or image applied to God" },
        { t: "qualifier", d: "a word that stretches the model beyond ordinary human limits" },
        { t: "disclosure", d: "a moment of insight in which something deeper is seen" }
      ],
      strengths: [
        "Explains how language about God can be both meaningful and not literal.",
        "Links religious language to religious experience (disclosure and commitment)."
      ],
      weaknesses: [
        "The qualifier ('infinitely') may be as unclear as the thing it qualifies: what exactly does it add?",
        "Appeals to disclosure and commitment are subjective and hard to test, so empiricists remain unconvinced."
      ]
    },
    {
      id: "rl-tillich",
      topic: "Religious Language",
      title: "Tillich: religious language as symbolic",
      q: "Tillich's view of religious language as symbolic",
      thinker: "Paul Tillich",
      summary: [
        "Religious language is symbolic: symbols point beyond themselves to the ultimate (God as 'Being-itself' or 'the ground of being') and participate in what they point to.",
        "Signs (like a red traffic light) merely point and can be replaced; symbols participate in the power of what they symbolise and cannot be invented at will. They grow and die with cultures.",
        "The only non-symbolic statement Tillich allows is that God is Being-itself; 'God is love' or 'God is king' are symbolic expressions of ultimate concern.",
        "Symbols open up levels of reality and of the soul that are otherwise closed (Dynamics of Faith, 1957)."
      ],
      why: [
        "To respond to critics such as the logical positivists by showing religious language does a different job from empirical description.",
        "To avoid literalism and idolatry while preserving meaningful God-talk.",
        "Reflects Tillich's existentialist theology, in which faith is 'ultimate concern'."
      ],
      terms: [
        { t: "symbol", d: "something that points beyond itself and participates in the reality it represents" },
        { t: "sign", d: "something that merely points to something else and is replaceable" },
        { t: "ground of being", d: "Tillich's way of speaking of God as the source of all existence" },
        { t: "ultimate concern", d: "what a person takes with unconditional seriousness" }
      ],
      strengths: [
        "Explains the evocative power of religious symbols such as the cross.",
        "Avoids crude literalism and responds to the verification challenge.",
        "Consistent with how religions use myth, ritual and image."
      ],
      weaknesses: [
        "If everything except 'God is Being-itself' is symbolic, it is hard to say what the symbols point to or to check whether they are adequate.",
        "What makes a symbol 'participate' is vague, and there is no clear test for authentic symbols.",
        "Risks reducing God to a symbol with no objective reality (a non-realist reading), which many believers would reject."
      ]
    },
    {
      id: "rl-ayer",
      topic: "Religious Language",
      title: "Ayer: the verification principle",
      q: "Ayer's verification principle",
      thinker: "A. J. Ayer (Vienna Circle / logical positivism)",
      summary: [
        "Ayer (Language, Truth and Logic, 1936) applied the verification principle: a statement is meaningful only if it is analytic (true by definition, e.g. mathematics) or synthetic and verifiable by sense experience.",
        "'God exists' is neither, so it is not false but meaningless (literally without cognitive meaning). Atheism and agnosticism are equally meaningless.",
        "Strong verification means conclusive verification by experience; weak verification means experience could make a statement probable, or be relevant to it, in principle.",
        "Religious language might express emotion, but it makes no factual claims."
      ],
      why: [
        "He was influenced by the Vienna Circle's logical positivism and by Hume's empiricism (Hume's Fork).",
        "The aim was to remove metaphysics and meaningless claims from philosophy so that only empirically testable statements counted as knowledge."
      ],
      terms: [
        { t: "analytic statement", d: "true by definition, e.g. 'a triangle has three sides'" },
        { t: "synthetic statement", d: "true or false depending on experience of the world" },
        { t: "cognitive", d: "capable of being true or false (a factual claim)" },
        { t: "weak verification", d: "verifiable in principle, or made probable, by experience" }
      ],
      strengths: [
        "Offers a clear, testable criterion of meaning that appeals to the scientific outlook.",
        "Forces religious believers to clarify what their claims actually assert."
      ],
      weaknesses: [
        "The verification principle itself is neither analytic nor empirically verifiable, so it seems to fail its own test.",
        "It rules out much that seems meaningful: scientific laws (general claims about all cases), historical claims about the past, and ethics.",
        "Hick's eschatological verification argues religious claims are verifiable in principle after death.",
        "Weak verification is so permissive that it may let in religious statements; strong verification is too strict."
      ]
    },
    {
      id: "rl-hick",
      topic: "Religious Language",
      title: "Hick: eschatological verification",
      q: "Hick's eschatological verification",
      thinker: "John Hick",
      summary: [
        "Parable of the Celestial City: two travellers walk the same road; one believes it leads to the Celestial City, the other believes it leads nowhere. Only at the end will the issue be settled.",
        "Religious claims are verifiable in principle after death. If there is an afterlife in which people experience the fulfilment of God's purposes and the presence of Christ, then 'God exists' is verified.",
        "So 'God exists' is a genuine factual (cognitive) statement. It is weakly verifiable now, and eschatologically verifiable later.",
        "Hick's argument suggests there is an asymmetry: if God exists believers will be able to verify it; if not, nobody will ever know."
      ],
      why: [
        "To answer Ayer and the verification challenge by showing that religious statements are not meaningless.",
        "To defend the cognitive status of religious language (it makes genuine claims about reality) without abandoning realism."
      ],
      terms: [
        { t: "eschatological", d: "relating to the 'last things' (death, judgement, the afterlife)" },
        { t: "cognitive", d: "making a factual claim that can be true or false" },
        { t: "in principle", d: "capable of being tested even if not testable now" }
      ],
      strengths: [
        "Keeps religious claims factual rather than reducing them to expressions of feeling.",
        "Shows the verification principle's own limits: some claims are verifiable only later."
      ],
      weaknesses: [
        "Verification depends on an afterlife existing, so the argument may be circular: it assumes what it needs to prove.",
        "The asymmetry means it can never verify atheism, and some argue it fails to be an empirical test at all.",
        "Verification after death is not available to anyone alive, so it cannot help with meaning now (Ayer's claim concerns present testability)."
      ]
    },
    {
      id: "rl-flew",
      topic: "Religious Language",
      title: "Flew: falsification and the gardener",
      q: "Flew's falsification challenge",
      thinker: "Antony Flew (adapting John Wisdom's parable)",
      summary: [
        "In 'Theology and Falsification' (1950), Flew adapted John Wisdom's parable of the invisible gardener: two explorers find a clearing and one claims an unseen gardener tends it. No test (a fence, bloodhounds) detects him, yet the believer keeps qualifying the claim until he is 'invisible, intangible, eternally elusive'.",
        "A genuine assertion must rule something out. If nothing could count against 'God loves us' (e.g. a child dying of cancer), the claim has suffered 'death by a thousand qualifications'.",
        "Falsification principle: for a statement to be meaningful, it must be possible to state what would count against it."
      ],
      why: [
        "He modified positivism: falsification (borrowed from Popper) was a more workable test than verification.",
        "It was first published in the journal University (1950) and discussed in Oxford philosophical circles, challenging believers to state what could count against their claims. Hare and Mitchell's replies formed the 'falsification symposium'.",
        "He wanted to show that religious claims, by retreating from evidence, cease to assert anything."
      ],
      terms: [
        { t: "falsification", d: "showing that a claim could be shown to be false by some possible evidence" },
        { t: "qualification", d: "a modification of a claim to protect it from evidence" },
        { t: "assertion", d: "a claim that rules out some possibility" }
      ],
      strengths: [
        "Challenges believers to take evidence (especially evil) seriously.",
        "Fits the scientific method and avoids the self-refutation problem of Ayer's verification."
      ],
      weaknesses: [
        "Hare and Mitchell argue religious claims are not like empirical hypotheses (bliks; trust).",
        "The falsification principle itself is not falsifiable, and many accepted claims (historical or general scientific laws) are not strictly falsifiable.",
        "Flew himself later moved to a form of deism, showing his own challenge did not settle the matter."
      ]
    },
    {
      id: "rl-hare",
      topic: "Religious Language",
      title: "Hare: bliks",
      q: "Hare's concept of bliks",
      thinker: "R. M. Hare",
      summary: [
        "Responding to Flew, Hare accepts that religious claims are not falsifiable assertions, but argues they are bliks: foundational ways of seeing the world that shape the interpretation of all evidence.",
        "Parable of the lunatic and the dons: a student is convinced the dons want to murder him; no kindness changes his mind. His blik is 'insane', but everyone has bliks (e.g. trusting that a car's steering will work), so the question is which blik is 'sane'.",
        "Religion matters because bliks affect how people live, even though they are not testable assertions."
      ],
      why: [
        "To defend the meaning of religious language against Flew while conceding it is not factual in an empirical sense.",
        "To show that unfalsifiable worldviews are unavoidable in human thought, not unique to religion."
      ],
      terms: [
        { t: "blik", d: "an unfalsifiable, fundamental way of interpreting the world" },
        { t: "non-cognitive", d: "not making a truth-claim; expressing an attitude or commitment" }
      ],
      strengths: [
        "Explains why believers hold their faith despite apparent counter-evidence.",
        "Recognises that everyone has presuppositions (bliks), so religion is not uniquely irrational."
      ],
      weaknesses: [
        "Mitchell argues Hare reduces religion to something with no truth claim, whereas believers think God really exists.",
        "Without any test, there is no way to say which blik is 'sane' (Hare offers no criteria).",
        "Flew replied that if bliks assert nothing, religion has been emptied of content."
      ]
    },
    {
      id: "rl-mitchell",
      topic: "Religious Language",
      title: "Mitchell: the partisan and the stranger",
      q: "Mitchell's parable of the partisan and the stranger",
      thinker: "Basil Mitchell",
      summary: [
        "A resistance fighter (the partisan) meets a stranger who claims to be the leader of the resistance. Sometimes the stranger helps the partisan's side; sometimes he appears to help the enemy. The partisan keeps trusting him ('he knows best') but accepts that the evidence counts against him.",
        "So religious claims are cognitive and evidence does count against them (e.g. evil), but the believer chooses to keep faith, rather than letting nothing count (as Flew claimed).",
        "Trust is a commitment-based response to evidence, not a refusal to engage with it."
      ],
      why: [
        "To defend the cognitive status of religious language against Flew without accepting that nothing counts against belief.",
        "To distinguish faith as reasoned trust from blind, evidence-proof belief."
      ],
      terms: [
        { t: "faith", d: "committed trust held despite some counter-evidence" },
        { t: "cognitive", d: "making a genuine claim that evidence can bear upon" }
      ],
      strengths: [
        "Takes evidence seriously (unlike Hare) while explaining why faith persists.",
        "Fits the way real trust in a person or cause functions."
      ],
      weaknesses: [
        "It is unclear when the partisan should give up trust: if no amount of evidence would suffice, it is still unfalsifiable (Flew's objection).",
        "The analogy assumes the stranger really is the leader, which begs the question about God's existence.",
        "Hare might say the partisan simply has a blik."
      ]
    },
    {
      id: "rl-wittgenstein",
      topic: "Religious Language",
      title: "Wittgenstein: language games",
      q: "Wittgenstein's language games applied to religious language",
      thinker: "Ludwig Wittgenstein (applied by D. Z. Phillips)",
      summary: [
        "In Philosophical Investigations (1953), later Wittgenstein argued that meaning is use: words get their meaning from how they are used in particular 'language games' within 'forms of life'.",
        "Religious language is its own language game with its own rules, meaningful to those who participate in the form of life of worship, prayer and ritual; it should not be judged by the standards of science or empirical verification.",
        "D. Z. Phillips developed this: religious talk is not about an external, empirically testable being, and criticisms such as Ayer's commit a category mistake.",
        "Contrasts with the early Wittgenstein of the Tractatus, whose picture theory restricted meaningful language to what could be pictured."
      ],
      why: [
        "He abandoned the picture theory of the Tractatus after concluding that language does many different jobs.",
        "Applied to religion, it answers the verification and falsification challenges by denying that religious claims should be tested by empirical standards."
      ],
      terms: [
        { t: "language game", d: "a rule-governed use of language within a particular activity or community" },
        { t: "form of life", d: "the shared practices and background that give language its meaning" },
        { t: "fideism", d: "the view that faith does not need, or cannot be justified by, reason or evidence" },
        { t: "category mistake", d: "judging something by the standards of a different category" }
      ],
      strengths: [
        "Explains how religious language is meaningful to believers without needing empirical verification.",
        "Shows that Ayer's criticism applies the wrong standards to a different language game."
      ],
      weaknesses: [
        "Leads to fideism: if a language game can only be judged from within, religious claims cannot be rationally criticised or compared with other worldviews.",
        "Many believers think 'God exists' is a factual claim about reality (realism), not just a rule of a game.",
        "Makes communication between language games difficult (e.g. believer and atheist)."
      ]
    },

    /* ============================ ARGUMENTS FOR GOD ============================ */
    {
      id: "ag-anselm",
      topic: "Arguments for the Existence of God",
      title: "Anselm's ontological argument",
      q: "Anselm's ontological argument",
      thinker: "Anselm of Canterbury",
      summary: [
        "In the Proslogion, Anselm defines God as 'that than which nothing greater can be conceived'.",
        "Even the fool who says in his heart there is no God understands this definition, so God exists at least in the mind (in intellectu).",
        "Existing in reality as well as in the mind is greater than existing in the mind alone; so if God existed only in the mind, we could conceive of something greater, which is a contradiction (reductio ad absurdum). Therefore God exists in reality.",
        "Second form (Proslogion 3): a being that cannot be conceived not to exist (a necessary being) is greater than one that can, so God exists necessarily."
      ],
      why: [
        "His project was fides quaerens intellectum (faith seeking understanding): a rational grasp of what he already believed.",
        "He responded to Psalm 14, 'the fool says in his heart there is no God', and sought a single, simple argument for God's existence and nature, in contrast to the several arguments of his earlier Monologion."
      ],
      terms: [
        { t: "a priori", d: "known independently of sense experience" },
        { t: "deductive", d: "if the premises are true, the conclusion must be true" },
        { t: "necessary existence", d: "existence that cannot fail to be the case" },
        { t: "reductio ad absurdum", d: "showing a claim is false by showing it leads to contradiction" }
      ],
      strengths: [
        "A priori and deductive: it does not depend on contingent facts about the universe.",
        "The second form (necessary existence) answers Gaunilo's island objection.",
        "Modern versions by Malcolm and Plantinga (modal logic) show continuing philosophical interest."
      ],
      weaknesses: [
        "Gaunilo's 'perfect island' parody (On Behalf of the Fool): the same logic would prove any perfect thing exists. Anselm replied that the argument applies only to a being than which none greater is conceivable, not to contingent things.",
        "Kant: existence is not a predicate, so existing does not make a thing greater.",
        "Hume: whatever we can conceive as existing we can also conceive as not existing, so no existence claim is demonstrable a priori.",
        "It appears to define God into existence; Aquinas rejected it because we cannot know God's essence."
      ]
    },
    {
      id: "ag-descartes",
      topic: "Arguments for the Existence of God",
      title: "Descartes' ontological argument",
      q: "Descartes' ontological argument",
      thinker: "René Descartes",
      summary: [
        "In Meditation V, Descartes argues that God is a supremely perfect being and that existence is a perfection; a supremely perfect being cannot lack a perfection, so God exists.",
        "Existence belongs to God's essence as having angles that sum to two right angles belongs to the essence of a triangle; you can no more think of God without existence than a mountain without a valley.",
        "The idea of God is innate, and the argument is as certain as geometry."
      ],
      why: [
        "Descartes aimed to establish certain foundations for knowledge, and God's existence guarantees the reliability of clear and distinct ideas.",
        "He restated Anselm's argument in the language of perfection to fit his rationalist method."
      ],
      terms: [
        { t: "rationalism", d: "the view that reason, not sense experience, is the main source of knowledge" },
        { t: "perfection", d: "a positive attribute that it is better to have than lack" },
        { t: "innate idea", d: "an idea present in the mind from birth rather than learned from experience" }
      ],
      strengths: [
        "Clearer than Anselm's, resting on a straightforward concept of perfection.",
        "Consistent with rationalist ideas of certain, a priori knowledge."
      ],
      weaknesses: [
        "Kant: existence is not a predicate or perfection, so it cannot be part of the essence of a thing.",
        "Gassendi argued existence is not a perfection but a precondition for having properties.",
        "Defining God as existing does not show anything exists; the triangle analogy shows only what is true if a triangle exists.",
        "Hume: existence claims are matters of fact, not relations of ideas."
      ]
    },
    {
      id: "ag-kant-ontological",
      topic: "Arguments for the Existence of God",
      title: "Kant's critique of the ontological argument",
      q: "Kant's critique of the ontological argument",
      thinker: "Immanuel Kant",
      summary: [
        "In the Critique of Pure Reason, Kant argues 'existence is not a (determining) predicate': saying something exists adds nothing to its concept.",
        "A hundred real thalers contain no more than a hundred possible thalers: the concept is the same, only whether there are any in reality differs.",
        "If you accept a subject and its predicate (e.g. a triangle and its three angles), you cannot reject the predicate; but if you reject the subject (God), there is no contradiction in rejecting its predicates, including necessary existence.",
        "Existence claims are synthetic and need experience, not conceptual analysis."
      ],
      why: [
        "Part of Kant's wider project of limiting reason to the bounds of possible experience, so that speculative metaphysics cannot establish God's existence.",
        "He was reacting to the rationalist tradition (Descartes, Leibniz) which used a priori arguments for God."
      ],
      terms: [
        { t: "predicate", d: "a property that is said to belong to a subject" },
        { t: "analytic", d: "true by the meaning of the terms" },
        { t: "synthetic", d: "true or false depending on how the world is" }
      ],
      strengths: [
        "Widely regarded as a powerful and influential refutation of the classic ontological argument.",
        "The thalers example makes the abstract point easy to grasp."
      ],
      weaknesses: [
        "Malcolm argues that Anselm's second form uses necessary existence, which is a legitimate property and is not touched by Kant's objection.",
        "Plantinga's modal version avoids Kant's criticism by reasoning about possible worlds.",
        "Kant himself kept God as a postulate of practical reason, showing he did not think belief in God irrational."
      ]
    },
    {
      id: "ag-paley",
      topic: "Arguments for the Existence of God",
      title: "Paley's teleological argument",
      q: "Paley's design argument",
      thinker: "William Paley",
      summary: [
        "In Natural Theology (1802), Paley imagines finding a watch on a heath. Its complex parts, working together for a purpose, imply a designer; the universe, even more complex, implies a designer, God.",
        "Argument from design qua purpose: things such as the eye are designed for a function.",
        "Argument from design qua regularity: the orderly laws, such as the movement of the planets, imply a lawgiver.",
        "It is a posteriori, inductive and based on analogy; Paley argued that even if the watch sometimes goes wrong, or we don't know how it was made, the inference to a designer still holds."
      ],
      why: [
        "The Enlightenment and Newtonian science pictured the universe as an orderly machine, which suggested a divine mechanic.",
        "Paley, a Christian clergyman, wanted to defend Christian belief by reason and observation, building on the tradition of Aquinas' Fifth Way."
      ],
      terms: [
        { t: "teleological", d: "relating to purpose or end (telos)" },
        { t: "a posteriori", d: "based on experience or observation" },
        { t: "inductive", d: "reasoning that makes a conclusion probable rather than certain" },
        { t: "qua", d: "'in the capacity of' (design qua purpose vs design qua regularity)" }
      ],
      strengths: [
        "Based on observation, so it is accessible and appeals to common sense.",
        "Strongly resonates with scientific awareness of order and complexity.",
        "Swinburne and Tennant reformulated it using the anthropic principle and regularity."
      ],
      weaknesses: [
        "Hume: the analogy between the universe and a machine is weak; the universe is unique and could be like an organism; the designer need not be the Christian God.",
        "Darwin: natural selection explains apparent design without a designer.",
        "The existence of evil and poor design counts against a perfect designer.",
        "The inference leads to a designer, not necessarily an omnipotent, omnibenevolent God."
      ]
    },
    {
      id: "ag-aquinas-fifth",
      topic: "Arguments for the Existence of God",
      title: "Aquinas' Fifth Way",
      q: "Aquinas' Fifth Way (the argument from design)",
      thinker: "Thomas Aquinas",
      summary: [
        "Natural bodies that lack intelligence (e.g. plants, planets) act for an end, always or nearly always in the same way, to achieve the best result; so they achieve their end by design, not by chance.",
        "Whatever lacks intelligence cannot move towards an end unless directed by an intelligent being, as an arrow is directed by an archer.",
        "Therefore there exists an intelligent being by whom all natural things are directed to their end, and this is God.",
        "It is a design argument qua regularity (rather than Paley's focus on purpose), and a posteriori."
      ],
      why: [
        "Part of the Summa Theologica's five ways, which aimed to show that God's existence can be demonstrated by natural reason.",
        "Aquinas rejected the ontological argument and so needed arguments starting from observation of the world, influenced by Aristotle's idea of final causes."
      ],
      terms: [
        { t: "final cause", d: "the end or purpose for which something exists (Aristotle)" },
        { t: "a posteriori", d: "argued from experience of the world" }
      ],
      strengths: [
        "Based on a universal observation: order in nature.",
        "Uses a simple, intelligible analogy (the archer and the arrow)."
      ],
      weaknesses: [
        "Darwin's natural selection explains apparent purpose without an intelligent director.",
        "Hume: order might arise from within nature; the argument does not establish a single, all-powerful God.",
        "Kant: the argument shows at most an architect of the form, not a creator of the matter of the universe."
      ]
    },
    {
      id: "ag-hume-design",
      topic: "Arguments for the Existence of God",
      title: "Hume's criticisms of the design argument",
      q: "Hume's criticisms of the design argument",
      thinker: "David Hume",
      summary: [
        "In Dialogues Concerning Natural Religion (1779) the sceptic Philo challenges Cleanthes' design argument.",
        "The analogy is weak: the universe is unique so we cannot compare it with other universes; it may be more like an organism than a machine.",
        "Even if designed, the designer need not be one perfect God: there could be many gods, a committee, an apprentice, or a deity that has since died.",
        "Imperfection and evil suggest a flawed designer. Epicurean hypothesis: random atoms in infinite time could settle into an ordered universe by chance.",
        "Infinite regress: if the universe needs a designer, who designed the designer?"
      ],
      why: [
        "As an empiricist, Hume doubted any claim that went beyond experience, and wanted to test the argument's strengths using the standards of evidence.",
        "He wrote before Darwin, using philosophical rather than biological arguments."
      ],
      terms: [
        { t: "empiricism", d: "knowledge comes from sense experience" },
        { t: "Epicurean hypothesis", d: "order may arise by chance from random matter over infinite time" }
      ],
      strengths: [
        "Highly influential: exposes the limits of reasoning by analogy from the universe.",
        "Philosophical criticisms still apply to modern versions of the argument."
      ],
      weaknesses: [
        "Hume's organism analogy is itself weak; the 'vegetable' universe is no better than the machine.",
        "Swinburne argues that the regularity of laws still calls for explanation, so Hume has not removed the need for one.",
        "Tennant's anthropic argument points to features of the universe not addressed by Hume."
      ]
    },
    {
      id: "ag-darwin-swinburne",
      topic: "Arguments for the Existence of God",
      title: "Darwin, Dawkins and modern design arguments (Tennant, Swinburne)",
      q: "the challenge of evolution to the design argument and its modern revisions",
      thinker: "Darwin, Dawkins, Tennant, Swinburne",
      summary: [
        "Darwin (On the Origin of Species, 1859): natural selection, through variation, inheritance and differential survival, explains the appearance of design without a designer.",
        "Dawkins (The Blind Watchmaker, 1986): evolution is a blind watchmaker with no foresight or purpose.",
        "Tennant (Philosophical Theology): the anthropic principle: the universe's fine-tuning, which allows life and intelligence, and the fact that evolution happened at all, point to design.",
        "Swinburne (The Existence of God): the regularity of succession (the laws of nature) needs explanation; God is the simplest explanation (Occam's razor), and religious claims are supported by a cumulative inductive case."
      ],
      why: [
        "Darwin's theory undermined Paley by offering a natural explanation of biological complexity.",
        "Tennant and Swinburne reframed design as an argument about the laws of nature and the conditions for life, rather than individual organisms."
      ],
      terms: [
        { t: "natural selection", d: "the process by which features that aid survival are passed on" },
        { t: "anthropic principle", d: "the universe's conditions seem finely tuned for life" },
        { t: "Occam's razor", d: "prefer the simplest adequate explanation" }
      ],
      strengths: [
        "Evolution is well supported by evidence, challenging Paley directly.",
        "Fine-tuning arguments appeal to features of physics that evolution does not explain.",
        "Swinburne's approach is probabilistic and compatible with science."
      ],
      weaknesses: [
        "The multiverse hypothesis and the observer selection effect can explain fine-tuning without God.",
        "Is God really the 'simplest' explanation, given a being of infinite power and knowledge?",
        "Even if the arguments work, they show at most a designer, not the God of classical theism."
      ]
    },
    {
      id: "ag-aquinas-cosmological",
      topic: "Arguments for the Existence of God",
      title: "Aquinas' cosmological arguments (First three Ways)",
      q: "Aquinas' cosmological arguments",
      thinker: "Thomas Aquinas",
      summary: [
        "First Way (motion): things are in motion (change from potentiality to actuality); anything moved is moved by something else; an infinite regress is impossible, so there must be a first unmoved mover, God.",
        "Second Way (efficient cause): nothing causes itself; there cannot be an infinite chain of efficient causes; so there is a first uncaused cause, God.",
        "Third Way (contingency and necessity): contingent beings come into and go out of existence; if everything were contingent, at some time there would have been nothing, and then nothing could exist now; so there must be a necessary being, whose necessity is not derived from another, God.",
        "These are a posteriori and inductive; the regress Aquinas rules out is of a hierarchical series of causes acting now, rather than a temporal sequence."
      ],
      why: [
        "In the Summa Theologica, Aquinas aimed to show that God's existence can be known by natural reason, though revelation is needed for full knowledge of God.",
        "He rejected the ontological argument and drew on Aristotle's idea of the unmoved mover."
      ],
      terms: [
        { t: "contingent", d: "something that might not have existed" },
        { t: "necessary being", d: "something that cannot fail to exist" },
        { t: "infinite regress", d: "an endless chain of causes with no first member" },
        { t: "potentiality / actuality", d: "what something could become vs what it currently is (Aristotle)" }
      ],
      strengths: [
        "Starts from universal features of experience (change, causation, contingency).",
        "The idea of a first cause or necessary being gives a satisfying ultimate explanation."
      ],
      weaknesses: [
        "Hume: nothing requires the series to have a first member, and we cannot extend causal reasoning to the whole universe.",
        "Russell: fallacy of composition (every human has a mother does not mean the human race has a mother); the universe may just be a 'brute fact'.",
        "Even if a first cause is established, it need not be the God of classical theism.",
        "Aquinas' physics of motion has been superseded; modern physics (Big Bang, quantum events) raises new questions."
      ]
    },
    {
      id: "ag-kalam",
      topic: "Arguments for the Existence of God",
      title: "The Kalam cosmological argument",
      q: "the Kalam cosmological argument",
      thinker: "Al-Ghazali; William Lane Craig",
      summary: [
        "Premise 1: whatever begins to exist has a cause. Premise 2: the universe began to exist. Conclusion: the universe has a cause.",
        "Craig argues an actual infinite cannot exist in reality, so the past cannot be infinite, and supports this with Big Bang cosmology.",
        "The cause must be timeless, spaceless, immaterial, enormously powerful and, because a timeless cause producing a temporal effect needs a free choice, personal: God.",
        "Originates with Islamic scholastic theologians, especially Al-Ghazali."
      ],
      why: [
        "Islamic thinkers such as Al-Ghazali defended creation from nothing (ex nihilo) against Aristotelian and Neoplatonist philosophers who held the universe was eternal.",
        "Craig revived it, combining it with modern cosmology."
      ],
      terms: [
        { t: "ex nihilo", d: "out of nothing" },
        { t: "actual infinite", d: "a completed, infinite collection that really exists" }
      ],
      strengths: [
        "Simple, logically clear and consistent with Big Bang cosmology.",
        "Avoids the infinite regress problem by arguing the universe had a beginning."
      ],
      weaknesses: [
        "Quantum physics suggests some events lack causes, challenging the first premise.",
        "Mathematicians use actual infinites, so the argument against them is disputed.",
        "Moving from a first cause to the personal God of theism is a large leap.",
        "Hume: we cannot assume causal principles apply to the origin of the universe."
      ]
    },
    {
      id: "ag-leibniz-copleston",
      topic: "Arguments for the Existence of God",
      title: "Leibniz and the Copleston–Russell debate",
      q: "the Principle of Sufficient Reason and the Copleston–Russell debate",
      thinker: "Leibniz, Copleston, Russell",
      summary: [
        "Leibniz: the Principle of Sufficient Reason says everything must have a reason why it is so rather than otherwise. The universe is contingent, so its sufficient reason must lie outside it in a necessary being, God.",
        "Copleston (1948 BBC debate) argued that contingent things need an explanation, which can only be a necessary being; the series of contingent things cannot explain itself.",
        "Russell replied that we cannot ask for an explanation of the whole: 'the universe is just there, and that's all'; he also claimed the idea of a necessary being is meaningless, since 'necessary' applies only to analytic statements.",
        "Russell also pointed to the fallacy of composition."
      ],
      why: [
        "Leibniz, a rationalist, argued that reality must be fully intelligible, so that no fact can be unexplained.",
        "Copleston defended Aquinas' contingency argument against Russell's logical-positivist-influenced objections."
      ],
      terms: [
        { t: "principle of sufficient reason", d: "everything must have a reason or explanation" },
        { t: "brute fact", d: "a fact that has no explanation" },
        { t: "fallacy of composition", d: "assuming the whole has a property because its parts do" }
      ],
      strengths: [
        "Leibniz's version targets the whole universe, avoiding the infinite regress issue.",
        "Copleston's version explains why there is something rather than nothing."
      ],
      weaknesses: [
        "The Principle of Sufficient Reason is an assumption: why should everything have an explanation?",
        "Russell: the universe may simply be a brute fact.",
        "A necessary being may be incoherent, since existence claims are not analytic (Hume, Kant)."
      ]
    },

    /* ============================ PROBLEM OF EVIL ============================ */
    {
      id: "pe-problem",
      topic: "The Problem of Evil",
      title: "The logical and evidential problems of evil",
      q: "the logical and evidential problems of evil",
      thinker: "Epicurus, Hume, Mackie, Rowe",
      summary: [
        "Inconsistent triad (Epicurus, Hume, Mackie): God is omnipotent and omnibenevolent, yet evil exists. Mackie (Evil and Omnipotence, 1955) argued these are logically inconsistent given extra premises: good eliminates evil as far as it can, and there are no limits to what an omnipotent being can do.",
        "Moral evil results from human actions; natural evil results from nature (earthquakes, disease).",
        "Evidential problem: Rowe's fawn, burned in a forest fire and suffering for days with no one to benefit, suggests gratuitous suffering, making God's existence unlikely.",
        "Distinction between a theodicy (justifies God in the face of evil) and a defence (shows only that there is no logical contradiction)."
      ],
      why: [
        "The problem arises from the classical theistic definition of God as all-powerful, all-loving and all-knowing, set against the reality of suffering.",
        "Philosophers such as Mackie used it to argue that belief in God is irrational; theists responded with theodicies."
      ],
      terms: [
        { t: "theodicy", d: "an attempt to justify God's goodness in the face of evil" },
        { t: "omnibenevolent", d: "all-loving, wholly good" },
        { t: "gratuitous evil", d: "suffering that serves no greater good" },
        { t: "natural evil", d: "suffering caused by nature rather than human action" }
      ],
      strengths: [
        "Often seen as the strongest argument against classical theism, as it uses the theist's own definition of God.",
        "The evidential version avoids claiming outright contradiction and is harder to dismiss."
      ],
      weaknesses: [
        "Plantinga's free will defence shows no logical inconsistency.",
        "The evidential version depends on knowing what suffering is truly gratuitous; sceptical theists argue humans cannot know this.",
        "Mackie's premises about omnipotence and good may be too simple."
      ]
    },
    {
      id: "pe-augustine",
      topic: "The Problem of Evil",
      title: "Augustine's theodicy",
      q: "Augustine's theodicy",
      thinker: "Augustine of Hippo",
      summary: [
        "Evil is not a substance but a privation (privatio boni): the lack or corruption of good. God created everything good ex nihilo, and the world was created perfect.",
        "Moral evil results from the misuse of free will by angels and by humans in the Fall (Adam and Eve), which brought original sin; humanity was 'seminally present' in Adam and so shares the guilt.",
        "Natural evil is the result of the Fall and the disorder that followed; suffering and Hell are a just punishment, and salvation is by God's grace.",
        "The universe remains good overall, as shadows and contrasts contribute to the beauty of a picture (aesthetic harmony)."
      ],
      why: [
        "He reacted against Manichaean dualism, which he had once held, that treated evil as an independent substance opposed to good.",
        "He wanted to defend the goodness of God and the doctrine of creation ex nihilo, drawing on Genesis, and to explain the human condition (original sin), in debate with Pelagius."
      ],
      terms: [
        { t: "privation", d: "the absence or corruption of good, not a thing in itself" },
        { t: "the Fall", d: "the disobedience of Adam and Eve and humanity's fall from grace" },
        { t: "original sin", d: "the inherited sinfulness of humanity after the Fall" },
        { t: "ex nihilo", d: "out of nothing" }
      ],
      strengths: [
        "Preserves God's omnibenevolence and omnipotence by placing responsibility on free creatures.",
        "Fits with the Genesis account and the traditional Christian doctrine of the Fall.",
        "Valuing free will underlies later versions such as Plantinga's defence."
      ],
      weaknesses: [
        "Schleiermacher: a perfect world could not go wrong; if it did, God must be responsible.",
        "An omniscient God would have foreseen the Fall, so God seems to bear responsibility.",
        "Evolution rejects a literal Adam, and natural evil existed before humans.",
        "Hell as punishment seems incompatible with a loving God, and inherited guilt seems unjust."
      ]
    },
    {
      id: "pe-irenaeus",
      topic: "The Problem of Evil",
      title: "Irenaean (soul-making) theodicy",
      q: "the Irenaean soul-making theodicy",
      thinker: "Irenaeus; John Hick",
      summary: [
        "Humans are created imperfect and immature, in God's 'image', and the world with its suffering is a 'vale of soul-making' in which they develop towards God's 'likeness' (Hick, Evil and the God of Love, 1966).",
        "Moral virtues such as courage and compassion are only meaningfully developed by overcoming real challenges; a hedonistic paradise would not allow this.",
        "Epistemic distance: God must remain at a distance so that humans have genuine freedom to choose to relate to God, so the world is religiously ambiguous.",
        "All will eventually reach the Kingdom of God (universal salvation), so suffering is justified by the final outcome."
      ],
      why: [
        "Hick revived the older view of Irenaeus (2nd century), which saw humans as growing from immaturity, as an alternative to Augustine's view.",
        "It was designed to fit modern science (evolution) and to avoid the problems of the Fall and of Hell."
      ],
      terms: [
        { t: "soul-making", d: "the spiritual and moral development of persons through experience" },
        { t: "epistemic distance", d: "God's remoteness that leaves room for free belief" },
        { t: "image and likeness", d: "created as potential beings (image) who may become like God (likeness)" }
      ],
      strengths: [
        "Consistent with evolutionary science and does not need a literal Fall.",
        "Explains natural as well as moral evil as a means of development.",
        "Universal salvation avoids the problem of Hell."
      ],
      weaknesses: [
        "Some suffering (e.g. the Holocaust, child deaths, animal suffering) seems excessive or does not seem to build character; D. Z. Phillips argued it may destroy people.",
        "God could have created beings who freely choose good without so much suffering.",
        "Universal salvation conflicts with traditional Christian teaching and may undermine moral responsibility.",
        "Rowe's evidential argument points to gratuitous evils that serve no clear purpose."
      ]
    },
    {
      id: "pe-free-will",
      topic: "The Problem of Evil",
      title: "Plantinga's free will defence",
      q: "Plantinga's free will defence",
      thinker: "Alvin Plantinga",
      summary: [
        "In God, Freedom and Evil (1974), Plantinga argues it is logically possible that God could not have created a world containing moral good but no moral evil, because genuine freedom means people might freely choose evil.",
        "He introduces transworld depravity: it is possible that every free creature would go wrong in at least one situation, whatever world God created.",
        "He aims to show only that there is no logical inconsistency in the triad (a defence), not to explain actual suffering (a theodicy).",
        "He suggests natural evil may result from the free actions of non-human agents such as fallen angels."
      ],
      why: [
        "To rebut Mackie's logical problem of evil by showing that the triad is not strictly contradictory.",
        "It developed the free will element of Augustine's approach using modern modal logic."
      ],
      terms: [
        { t: "defence", d: "shows God and evil are logically compatible, without explaining why" },
        { t: "transworld depravity", d: "every possible free creature would choose wrongly at some point" },
        { t: "libertarian free will", d: "free will that is not determined by prior causes" }
      ],
      strengths: [
        "Widely held to have defeated the logical problem of evil.",
        "Respects the value of free will and moral responsibility."
      ],
      weaknesses: [
        "Mackie: God could have created beings who always freely choose good.",
        "It does not explain natural evil without appealing to unseen agents.",
        "It is a defence, not a theodicy, so does not address the evidential problem."
      ]
    },

    /* ============================ RELIGIOUS EXPERIENCE ============================ */
    {
      id: "re-james",
      topic: "Religious Experience",
      title: "William James: characteristics of religious experience",
      q: "William James' characteristics of religious experience",
      thinker: "William James",
      summary: [
        "In The Varieties of Religious Experience (1902), James identifies four marks of mystical experience: ineffable (it cannot be adequately described), noetic (it gives knowledge or insight), transient (it does not last long) and passive (the subject feels grasped by a greater power).",
        "James took a pragmatic approach, judging experiences by their 'fruits' for a person's life, rather than by theological doctrine.",
        "He argued religious experiences are real and valuable psychological events, whatever their ultimate source."
      ],
      why: [
        "James was a psychologist and pragmatist who wanted to study religion empirically, based on first-hand accounts rather than on institutional theology."
      ],
      terms: [
        { t: "ineffable", d: "impossible to express fully in words" },
        { t: "noetic", d: "giving a sense of knowledge or insight" },
        { t: "pragmatism", d: "judging ideas by their practical effects" }
      ],
      strengths: [
        "Builds on a wide range of first-hand accounts.",
        "The pragmatic test focuses on observable effects."
      ],
      weaknesses: [
        "Freud: religious experience may be wish-fulfilment or illusion.",
        "Neuroscientific explanations (e.g. temporal lobe activity) offer natural causes.",
        "The experiences are subjective and unverifiable, and may be interpreted differently across traditions."
      ]
    },
    {
      id: "re-swinburne",
      topic: "Religious Experience",
      title: "Swinburne: credulity and testimony",
      q: "Swinburne's principles of credulity and testimony",
      thinker: "Richard Swinburne",
      summary: [
        "Principle of credulity: unless there are special reasons for doubt, it is rational to believe that things are as they seem; so if it seems to someone that they experienced God, then, probably, they did.",
        "Principle of testimony: in the absence of reasons to doubt, it is rational to accept other people's reports of their experience.",
        "Defeaters: the experience happened under unreliable circumstances (e.g. drugs), the person is unreliable, or there is strong evidence God was absent or the event had a natural cause.",
        "Part of his cumulative case for God in The Existence of God."
      ],
      why: [
        "To show that religious experience provides rational support for belief in God on the same basis as ordinary perceptual claims.",
        "He aimed to shift the burden of proof onto the sceptic."
      ],
      terms: [
        { t: "credulity", d: "willingness to accept that things are as they appear" },
        { t: "defeater", d: "a reason that undermines the credibility of a claim" },
        { t: "cumulative case", d: "several arguments that together raise the probability of a conclusion" }
      ],
      strengths: [
        "Applies the same rule to religious and everyday experience, so it is not special pleading.",
        "Allows for defeaters and so is not unreflective."
      ],
      weaknesses: [
        "Martin: if we accept this, we must accept bizarre experiences too (e.g. of the Great Pumpkin).",
        "Different religions report conflicting experiences, so they cannot all be accurate.",
        "Naturalistic explanations (psychology, neuroscience) may be defeaters."
      ]
    },
    {
      id: "re-otto",
      topic: "Religious Experience",
      title: "Otto: the numinous",
      q: "Otto's idea of the numinous",
      thinker: "Rudolf Otto",
      summary: [
        "In The Idea of the Holy (1917), Otto argued the core of religion is the numinous: an experience of the 'wholly other' (mysterium tremendum et fascinans).",
        "Mysterium: it is mysterious and beyond understanding. Tremendum: it inspires awe and fear. Fascinans: it is also attractive and fascinating.",
        "It is a non-rational, a priori category of experience that cannot be reduced to ethics or reason."
      ],
      why: [
        "He wanted to defend religion against rationalist and moralistic reductions, by focusing on the distinctive feeling at its centre."
      ],
      terms: [
        { t: "numinous", d: "the sense of the holy as wholly other" },
        { t: "mysterium tremendum et fascinans", d: "a mystery that is awe-inspiring and fascinating" }
      ],
      strengths: [
        "Captures the awe and mystery reported in many traditions."
      ],
      weaknesses: [
        "The numinous is a feeling that may have a natural, psychological explanation.",
        "Does not show that any object lies behind the feeling.",
        "May be too focused on one type of experience, mainly Christian."
      ]
    },

    /* ============================ ETHICAL THEORIES ============================ */
    {
      id: "et-natural-law",
      topic: "Ethical Theories",
      title: "Natural Law (Aquinas)",
      q: "Aquinas' Natural Law",
      thinker: "Thomas Aquinas",
      summary: [
        "Four types of law: eternal (God's rational plan), divine (revealed in scripture), natural (discerned by human reason from the order of creation) and human (made by societies, which should reflect natural law).",
        "Humans have a purpose (telos) given by God; goodness consists in fulfilling this purpose.",
        "Primary precepts: preserve life, reproduce, educate the young, live in an ordered society and worship God, all derived from the basic precept to 'do good and avoid evil'.",
        "Secondary precepts are derived from the primary ones (e.g. do not murder). Real goods fulfil our telos; apparent goods seem good but do not.",
        "Doctrine of double effect: an action with a bad side-effect can be permitted if the intention is good, the bad effect is not the means to the good, and the good outweighs the bad."
      ],
      why: [
        "Aquinas synthesised Aristotle's idea of purpose (telos) with Christian theology, to show that morality is accessible to reason, not only revelation.",
        "He aimed to provide an objective, universal basis for ethics grounded in human nature."
      ],
      terms: [
        { t: "telos", d: "the purpose or end for which something exists" },
        { t: "primary precepts", d: "basic goods all humans should pursue" },
        { t: "real and apparent goods", d: "genuinely fulfilling vs only appearing good" },
        { t: "doctrine of double effect", d: "a good act may have an unintended bad side effect" }
      ],
      strengths: [
        "Objective and universal, offering a basis for human rights and shared morality.",
        "Based on reason, so it can be shared by non-Christians (Aristotelian roots).",
        "The doctrine of double effect gives some flexibility to the rules."
      ],
      weaknesses: [
        "The naturalistic fallacy (Hume, Moore): moving from what is natural ('is') to what ought to be.",
        "It assumes a God-given purpose, which does not convince non-believers; evolution challenges fixed purposes.",
        "Its application to contraception and homosexuality is considered rigid and outdated by many.",
        "The distinction between real and apparent goods may be subjective, and double effect is open to abuse."
      ]
    },
    {
      id: "et-situation",
      topic: "Ethical Theories",
      title: "Situation Ethics (Fletcher)",
      q: "Fletcher's Situation Ethics",
      thinker: "Joseph Fletcher",
      summary: [
        "In Situation Ethics: The New Morality (1966), Fletcher argues the only intrinsic good is agape (selfless, unconditional love); moral decisions should be made by what agape requires in each situation.",
        "Three approaches: legalism (rigid rules), antinomianism (no rules) and situationism (rules as guidelines that love can override).",
        "Four working principles: pragmatism (it must work), relativism (relative to love), positivism (starting from the positive choice of love) and personalism (people over principles).",
        "Six fundamental principles, including: love is the only intrinsic good, love is Christian love, love and justice are the same, love wills the neighbour's good, and love decides case by case.",
        "Conscience is a verb, a function of deciding, not a faculty."
      ],
      why: [
        "He reacted against rigid legalism (the Pharisees, Catholic Natural Law) and against moral relativism, finding a middle way based on Jesus' command of love.",
        "He wrote in the 1960s, influenced by changing social attitudes and by Bishop Robinson's Honest to God."
      ],
      terms: [
        { t: "agape", d: "selfless, unconditional love (Greek)" },
        { t: "legalism", d: "following fixed rules regardless of situation" },
        { t: "antinomianism", d: "rejecting all rules" },
        { t: "personalism", d: "putting people before principles" }
      ],
      strengths: [
        "Flexible and sensitive to individual circumstances.",
        "Person-centred and rooted in the Christian commandment to love.",
        "Rejects rigid rules that may cause harm."
      ],
      weaknesses: [
        "Unpredictable and subjective: it is hard to know what love requires; Barclay argued we need rules.",
        "May justify any act (the end justifies the means), e.g. in extreme situations.",
        "It is unclear how to calculate the loving outcome, and no one can know all consequences.",
        "It may not be distinctively Christian, as it resembles utilitarianism in focusing on outcomes."
      ]
    },
    {
      id: "et-kant",
      topic: "Ethical Theories",
      title: "Kantian ethics",
      q: "Kant's deontological ethics",
      thinker: "Immanuel Kant",
      summary: [
        "Deontological: morality is about duty, not consequences; only a good will is good without qualification (Groundwork of the Metaphysics of Morals, 1785).",
        "Categorical imperative: (1) universalisability: act only on a maxim you could will to become a universal law; (2) treat humanity always as an end and never merely as a means; (3) act as a member of a kingdom of ends (autonomy).",
        "Hypothetical imperatives ('if you want X, do Y') are conditional; categorical imperatives apply unconditionally.",
        "Perfect duties (e.g. do not lie) allow no exceptions; imperfect duties (e.g. develop talents) allow flexibility.",
        "The summum bonum is virtue and happiness in proportion, which requires the postulates of practical reason: freedom, immortality and God."
      ],
      why: [
        "Kant sought an objective moral foundation based on reason alone, in response to Hume's empiricism and the utilitarian focus on outcomes.",
        "It reflects Enlightenment confidence in human rationality and autonomy."
      ],
      terms: [
        { t: "deontological", d: "ethics based on duty or rules rather than consequences" },
        { t: "categorical imperative", d: "an unconditional moral command binding on all rational beings" },
        { t: "good will", d: "acting from duty for its own sake" },
        { t: "autonomy", d: "self-governance by rational moral law" }
      ],
      strengths: [
        "Objective and universal, treating people equally and respecting human dignity.",
        "Consistent: it does not depend on unpredictable consequences.",
        "The second formulation supports human rights and prevents using people."
      ],
      weaknesses: [
        "Conflicts of duties: what if two duties clash? (e.g. telling the truth vs protecting a friend from a murderer).",
        "Rigid: it ignores consequences and emotion.",
        "Universalisability can justify trivial or immoral maxims, depending on how a maxim is formulated.",
        "The summum bonum and postulates seem to depend on religious assumptions."
      ]
    },
    {
      id: "et-bentham",
      topic: "Ethical Theories",
      title: "Bentham's Act Utilitarianism",
      q: "Bentham's Act Utilitarianism",
      thinker: "Jeremy Bentham",
      summary: [
        "Teleological and consequentialist: the right action is the one that produces the greatest happiness for the greatest number (the principle of utility).",
        "Hedonistic and quantitative: all pleasures are equal in kind, so only the amount matters ('push-pin is as good as poetry').",
        "Hedonic calculus (Introduction to the Principles of Morals and Legislation, 1789): intensity, duration, certainty, propinquity (nearness), fecundity, purity and extent.",
        "Act utilitarianism: each individual act is judged by its own consequences."
      ],
      why: [
        "Enlightenment reformers wanted laws and morals based on observable outcomes rather than tradition, religion or abstract rights.",
        "Bentham aimed to provide a practical, secular method for social and legal reform."
      ],
      terms: [
        { t: "consequentialism", d: "the rightness of an act depends on its outcomes" },
        { t: "hedonism", d: "pleasure is the only intrinsic good" },
        { t: "principle of utility", d: "act to maximise happiness" },
        { t: "hedonic calculus", d: "a method for measuring pleasure and pain" }
      ],
      strengths: [
        "Democratic and egalitarian: everyone's happiness counts equally.",
        "Simple, secular and flexible: it can respond to any situation.",
        "Focuses on outcomes that are visible and measurable."
      ],
      weaknesses: [
        "Tyranny of the majority: the happiness of many might justify harm to a minority.",
        "Impractical: consequences are unpredictable and the calculus takes too long.",
        "Ignores justice and rights, and includes all pleasures even sadistic ones.",
        "Mill criticised it as a 'doctrine fit for pigs', as it ignores quality."
      ]
    },
    {
      id: "et-mill",
      topic: "Ethical Theories",
      title: "Mill's Utilitarianism and Rule Utilitarianism",
      q: "Mill's utilitarianism and rule utilitarianism",
      thinker: "John Stuart Mill",
      summary: [
        "In Utilitarianism (1863), Mill distinguishes higher pleasures (intellectual, moral, aesthetic) from lower (bodily) ones: it is better to be a human dissatisfied than a pig satisfied.",
        "Competent judges, who have experienced both kinds, will prefer the higher pleasures.",
        "Mill's harm principle (On Liberty) protects individual freedom; rights and rules are valued because they promote happiness in the long term.",
        "Rule utilitarianism (developed by later thinkers such as Urmson, Hospers and Brandt, building on Mill's remarks): follow rules that generally maximise happiness. Strong rule utilitarianism says always follow them; weak rule utilitarianism allows breaking rules to prevent disaster."
      ],
      why: [
        "Mill, raised in Bentham's circle of reformers, wanted to respond to the criticism that utilitarianism is a crude 'pig philosophy', by adding quality of pleasure.",
        "Rule utilitarianism emerged to deal with the problem that act utilitarianism could justify injustice."
      ],
      terms: [
        { t: "higher and lower pleasures", d: "intellectual vs physical pleasures" },
        { t: "competent judges", d: "those who have experienced both kinds of pleasure" },
        { t: "harm principle", d: "the only reason to restrict liberty is to prevent harm to others" },
        { t: "weak vs strong rule utilitarianism", d: "rules may sometimes be broken vs never broken" }
      ],
      strengths: [
        "Recognises quality of pleasure, answering the 'pig' objection.",
        "Rule utilitarianism better protects rights and justice and removes the need to calculate each time."
      ],
      weaknesses: [
        "Elitist: who are the competent judges, and why prefer the higher pleasures?",
        "Rule utilitarianism may collapse into act utilitarianism (weak) or become rule worship (strong).",
        "Still difficult to predict consequences and measure happiness."
      ]
    }
  ]
};
