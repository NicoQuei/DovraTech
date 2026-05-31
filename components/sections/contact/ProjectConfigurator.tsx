"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, MessageCircle, Mail } from "lucide-react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { buttonClasses } from "@/components/ui/Button";
import { formatBR } from "@/lib/utils";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type TypeOption = {
  id: string;
  label: string;
  desc: string;
  icon: IconName;
  /** preço inicial ("a partir de") */
  base: number;
  /** prazo em dias */
  dmin: number;
  dmax: number;
};

const TYPES: TypeOption[] = [
  { id: "landing", label: "Landing page", desc: "Uma página focada em vender ou captar contatos", icon: "MousePointerClick", base: 400, dmin: 2, dmax: 3 },
  { id: "site", label: "Site institucional", desc: "Site com várias páginas: sobre, serviços, contato", icon: "Globe", base: 1000, dmin: 4, dmax: 8 },
  { id: "ecommerce", label: "Loja virtual", desc: "Vender produtos online, com carrinho e pagamento", icon: "ShoppingCart", base: 2500, dmin: 10, dmax: 18 },
  { id: "saas", label: "Plataforma por assinatura", desc: "Sistema com contas de usuário e cobrança recorrente", icon: "Layers", base: 4000, dmin: 16, dmax: 28 },
  { id: "app", label: "Aplicativo de celular", desc: "App para Android e iPhone", icon: "Smartphone", base: 4000, dmin: 14, dmax: 28 },
  { id: "sistema", label: "Sistema interno", desc: "Ferramenta sob medida para a sua operação", icon: "Workflow", base: 3000, dmin: 12, dmax: 24 },
];

type FeatureOption = {
  id: string;
  label: string;
  desc: string;
  icon: IconName;
  /** quanto soma ao preço inicial */
  add: number;
  /** dias adicionados ao prazo */
  dadd: [number, number];
};

const FEATURES: FeatureOption[] = [
  { id: "design", label: "Design sob medida", desc: "Layout exclusivo, não um modelo pronto", icon: "PenTool", add: 300, dadd: [2, 4] },
  { id: "pagamentos", label: "Pagamentos online", desc: "Pix, cartão e checkout", icon: "CreditCard", add: 250, dadd: [1, 3] },
  { id: "auth", label: "Área de login", desc: "Cadastro e contas de usuário", icon: "Lock", add: 250, dadd: [1, 2] },
  { id: "admin", label: "Painel de gestão", desc: "Uma área para você administrar o conteúdo", icon: "BarChart3", add: 500, dadd: [3, 6] },
  { id: "integracoes", label: "Integrações", desc: "Conectar com outros sistemas que você já usa", icon: "Plug", add: 400, dadd: [2, 5] },
  { id: "seo", label: "Aparecer no Google", desc: "Otimização para buscas (SEO)", icon: "TrendingUp", add: 200, dadd: [1, 2] },
];

/** Teto de prazo: nenhum projeto passa de 1 mês. */
const MAX_DAYS = 30;

/** Formata uma faixa de dias num prazo amigável (valor + unidade). */
function formatPrazo(dmin: number, dmax: number): { value: string; unit: string } {
  if (dmax <= 3) return { value: "até 72", unit: "horas" };
  if (dmax < 14) return { value: `${dmin}–${dmax}`, unit: "dias" };
  const wmin = Math.max(1, Math.round(dmin / 7));
  const wmax = Math.max(wmin, Math.round(dmax / 7));
  return { value: `${wmin}–${wmax}`, unit: "semanas" };
}

const STEPS = ["Tipo", "Escopo", "Estimativa", "Contato"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ProjectConfigurator() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [typeId, setTypeId] = useState<string | null>(null);
  const [features, setFeatures] = useState<string[]>([]);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState(false);

  const type = TYPES.find((t) => t.id === typeId) ?? null;

  const estimate = useMemo(() => {
    if (!type) return null;
    let base = type.base;
    let dmin = type.dmin;
    let dmax = type.dmax;
    for (const id of features) {
      const f = FEATURES.find((x) => x.id === id);
      if (!f) continue;
      base += f.add;
      dmin += f.dadd[0];
      dmax += f.dadd[1];
    }
    // nenhum projeto passa de 1 mês
    dmin = Math.min(dmin, MAX_DAYS);
    dmax = Math.min(dmax, MAX_DAYS);
    return { base, dmin, dmax };
  }, [type, features]);

  const emailValid = EMAIL_RE.test(form.email);
  const contactValid = form.name.trim().length > 1 && emailValid;

  const canContinue =
    step === 0 ? !!type : step === 3 ? contactValid : true;

  const go = (next: number) => {
    setDir(next > step ? 1 : -1);
    setStep(next);
  };

  const toggleFeature = (id: string) =>
    setFeatures((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );

  const summaryText = () => {
    const feats = features
      .map((id) => FEATURES.find((f) => f.id === id)?.label)
      .filter(Boolean)
      .join(", ");
    return [
      `Olá, Dovra! Montei um projeto no configurador:`,
      `• Tipo: ${type?.label}`,
      `• Escopo: ${feats || "essencial"}`,
      estimate
        ? `• Estimativa: a partir de R$ ${formatBR(estimate.base)} · ${
            formatPrazo(estimate.dmin, estimate.dmax).value
          } ${formatPrazo(estimate.dmin, estimate.dmax).unit}`
        : "",
      ``,
      `Nome: ${form.name}`,
      form.company ? `Empresa: ${form.company}` : "",
      `E-mail: ${form.email}`,
      form.message ? `Mensagem: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
  };

  const whatsappUrl = `${site.whatsapp}?text=${encodeURIComponent(summaryText())}`;
  const mailtoUrl = `mailto:${site.email}?subject=${encodeURIComponent(
    `Novo projeto — ${type?.label ?? ""}`,
  )}&body=${encodeURIComponent(summaryText())}`;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!contactValid) return;
    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    setStep(0);
    setTypeId(null);
    setFeatures([]);
    setForm({ name: "", email: "", company: "", message: "" });
    setTouched(false);
  };

  const variants = {
    enter: (d: number) => (reduce ? { opacity: 0 } : { opacity: 0, x: d * 32 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => (reduce ? { opacity: 0 } : { opacity: 0, x: d * -32 }),
  };

  const progress = submitted ? 100 : ((step + 1) / STEPS.length) * 100;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-line bg-ink-800">
      {/* Progress header */}
      <div className="border-b border-line p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-fg-faint">
            {submitted
              ? "Pedido montado"
              : `Passo ${step + 1} de ${STEPS.length} · ${STEPS[step]}`}
          </p>
          <span className="font-mono text-xs text-brand">{Math.round(progress)}%</span>
        </div>
        <div className="mt-3 h-1 overflow-hidden rounded-full bg-line">
          <motion.div
            className="h-full bg-brand"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: reduce ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {submitted ? (
          <Success
            summary={summaryText()}
            whatsappUrl={whatsappUrl}
            mailtoUrl={mailtoUrl}
            onReset={reset}
          />
        ) : (
          <form onSubmit={onSubmit}>
            <div className="min-h-[20rem]">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={step}
                  custom={dir}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  {step === 0 && (
                    <Fieldset
                      legend="Que tipo de projeto você tem em mente?"
                      hint="Escolha o que mais se aproxima — refinamos depois."
                    >
                      <div className="grid gap-3 sm:grid-cols-2">
                        {TYPES.map((t) => (
                          <OptionCard
                            key={t.id}
                            icon={t.icon}
                            label={t.label}
                            desc={t.desc}
                            selected={typeId === t.id}
                            onClick={() => setTypeId(t.id)}
                          />
                        ))}
                      </div>
                    </Fieldset>
                  )}

                  {step === 1 && (
                    <Fieldset
                      legend="O que o projeto precisa incluir?"
                      hint="Selecione tudo que se aplica (opcional)."
                    >
                      <div className="grid gap-3 sm:grid-cols-2">
                        {FEATURES.map((f) => (
                          <OptionCard
                            key={f.id}
                            icon={f.icon}
                            label={f.label}
                            desc={f.desc}
                            selected={features.includes(f.id)}
                            multi
                            onClick={() => toggleFeature(f.id)}
                          />
                        ))}
                      </div>
                    </Fieldset>
                  )}

                  {step === 2 && estimate && (
                    <Fieldset
                      legend="Sua estimativa inicial"
                      hint="Um ponto de partida — o número exato sai depois da conversa, com o escopo na mão."
                    >
                      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                        <div className="bg-ink-700 p-7">
                          <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">
                            Investimento
                          </p>
                          <p className="mt-3 font-display text-3xl font-semibold text-fg">
                            <span className="mr-1.5 align-middle text-sm font-normal text-fg-muted">
                              a partir de
                            </span>
                            R$ {formatBR(estimate.base)}
                          </p>
                        </div>
                        <div className="bg-ink-700 p-7">
                          <p className="font-mono text-xs uppercase tracking-[0.18em] text-fg-faint">
                            Prazo
                          </p>
                          <p className="mt-3 font-display text-3xl font-semibold text-fg">
                            {formatPrazo(estimate.dmin, estimate.dmax).value}
                            <span className="ml-2 text-base font-normal text-fg-muted">
                              {formatPrazo(estimate.dmin, estimate.dmax).unit}
                            </span>
                          </p>
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-fg-muted">
                        Inclui {type?.label.toLowerCase()}
                        {features.length > 0 && " + funcionalidades selecionadas"}.
                        Performance, documentação e propriedade do código já estão
                        no pacote — sempre.
                      </p>
                    </Fieldset>
                  )}

                  {step === 3 && (
                    <Fieldset
                      legend="Quase lá — como falamos com você?"
                      hint="Sem spam. Respondemos em até 1 dia útil."
                    >
                      <div className="grid gap-4">
                        <Field
                          label="Nome"
                          required
                          value={form.name}
                          onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                          error={touched && form.name.trim().length <= 1 ? "Informe seu nome." : undefined}
                        />
                        <Field
                          label="E-mail"
                          type="email"
                          required
                          value={form.email}
                          onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                          error={touched && !emailValid ? "E-mail inválido." : undefined}
                        />
                        <Field
                          label="Empresa"
                          value={form.company}
                          onChange={(v) => setForm((f) => ({ ...f, company: v }))}
                        />
                        <Field
                          label="Mensagem"
                          textarea
                          value={form.message}
                          onChange={(v) => setForm((f) => ({ ...f, message: v }))}
                        />
                      </div>
                    </Fieldset>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer nav */}
            <div className="mt-8 flex items-center justify-between gap-4 border-t border-line pt-6">
              <button
                type="button"
                onClick={() => go(Math.max(0, step - 1))}
                disabled={step === 0}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-fg-muted transition-colors hover:text-fg disabled:pointer-events-none disabled:opacity-40",
                )}
              >
                <ArrowLeft className="h-4 w-4" /> Voltar
              </button>

              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => canContinue && go(step + 1)}
                  disabled={!canContinue}
                  className={buttonClasses("primary", "md")}
                >
                  Continuar
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button type="submit" className={buttonClasses("primary", "md")}>
                  Montar pedido
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function Fieldset({
  legend,
  hint,
  children,
}: {
  legend: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset>
      <legend className="font-display text-2xl font-medium text-fg">
        {legend}
      </legend>
      {hint && <p className="mt-2 text-sm text-fg-muted">{hint}</p>}
      <div className="mt-6">{children}</div>
    </fieldset>
  );
}

function OptionCard({
  icon,
  label,
  desc,
  selected,
  multi,
  onClick,
}: {
  icon: IconName;
  label: string;
  desc?: string;
  selected: boolean;
  multi?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "group flex items-start gap-3 rounded-xl border p-4 text-left transition-colors duration-200",
        selected
          ? "border-brand bg-brand/10"
          : "border-line bg-ink-700/40 hover:border-line-strong",
      )}
    >
      <span
        className={cn(
          "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors",
          selected ? "border-brand/50 bg-brand/10 text-brand" : "border-line text-fg-muted",
        )}
      >
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-medium text-fg">{label}</span>
        {desc && (
          <span className="mt-0.5 block text-xs leading-snug text-fg-muted">
            {desc}
          </span>
        )}
      </span>
      <span
        className={cn(
          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border text-ink transition-colors",
          multi ? "rounded-md" : "rounded-full",
          selected ? "border-brand bg-brand" : "border-line-strong bg-transparent",
        )}
      >
        {selected && <Check className="h-3.5 w-3.5" />}
      </span>
    </button>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  textarea,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  error?: string;
}) {
  const id = `f-${label.toLowerCase().replace(/\s+/g, "-")}`;
  const cls =
    "w-full rounded-xl border border-line bg-ink-900/60 px-4 py-3 text-fg placeholder:text-fg-faint focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand";
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-fg-muted">
        {label}
        {required && <span className="text-brand"> *</span>}
      </label>
      {textarea ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className={cls}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          required={required}
          onChange={(e) => onChange(e.target.value)}
          className={cls}
          aria-invalid={!!error}
        />
      )}
      {error && <p className="mt-1.5 text-sm text-danger">{error}</p>}
    </div>
  );
}

function Success({
  summary,
  whatsappUrl,
  mailtoUrl,
  onReset,
}: {
  summary: string;
  whatsappUrl: string;
  mailtoUrl: string;
  onReset: () => void;
}) {
  return (
    <div>
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-brand/40 bg-brand/10 text-brand">
        <Check className="h-7 w-7" />
      </span>
      <h2 className="mt-6 font-display text-3xl font-semibold text-fg">
        Pronto. Agora é só enviar.
      </h2>
      <p className="mt-3 max-w-lg text-fg-muted">
        Montamos o resumo do seu projeto. Escolha por onde prefere falar com a
        gente — já vai tudo preenchido.
      </p>

      <pre className="mt-6 whitespace-pre-wrap rounded-2xl border border-line bg-ink-900/60 p-5 font-mono text-xs leading-relaxed text-fg-muted">
        {summary}
      </pre>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className={buttonClasses("primary", "lg")}>
          <MessageCircle className="h-4 w-4" />
          Enviar no WhatsApp
        </a>
        <a href={mailtoUrl} className={buttonClasses("secondary", "lg")}>
          <Mail className="h-4 w-4" />
          Enviar por e-mail
        </a>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="mt-6 text-sm text-fg-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
      >
        Recomeçar
      </button>
    </div>
  );
}
