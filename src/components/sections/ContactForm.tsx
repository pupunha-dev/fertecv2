"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  SEGMENTOS_INDUSTRIAIS,
  type ContactFormData,
} from "@/lib/schemas/contact";
import Button from "@/components/ui/Button";

const FORMSPREE_URL = process.env.NEXT_PUBLIC_FORMSPREE_URL ?? "";

const inputStyles =
  "w-full rounded-[4px] border border-border-subtle bg-bg-surface px-4 py-3 font-sans text-sm text-text-primary placeholder:text-text-muted focus:border-orange focus:outline-none";

const labelStyles = "font-label text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-text-secondary";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const fileList = useWatch({ control, name: "arquivo" });
  const fileName = fileList && fileList.length > 0 ? fileList[0].name : null;

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");

    try {
      const formData = new FormData();
      formData.append("nome", data.nome);
      formData.append("empresa", data.empresa);
      formData.append("segmento", data.segmento);
      formData.append("telefone", data.telefone);
      formData.append("email", data.email);
      formData.append("descricao", data.descricao);
      if (data.arquivo && data.arquivo.length > 0) {
        formData.append("arquivo", data.arquivo[0]);
      }

      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Falha no envio");
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-border-active bg-bg-surface p-8">
        <h3 className="font-display text-xl font-bold uppercase text-text-primary">
          Solicitação enviada
        </h3>
        <p className="mt-3 font-sans text-sm text-text-secondary sm:text-base">
          Recebemos sua solicitação de avaliação técnica. Nossa equipe vai
          analisar as informações e entrar em contato em breve.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className={labelStyles}>
            Nome *
          </label>
          <input id="nome" type="text" className={inputStyles} {...register("nome")} />
          {errors.nome && (
            <p className="font-sans text-xs text-orange">{errors.nome.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="empresa" className={labelStyles}>
            Empresa *
          </label>
          <input id="empresa" type="text" className={inputStyles} {...register("empresa")} />
          {errors.empresa && (
            <p className="font-sans text-xs text-orange">{errors.empresa.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="segmento" className={labelStyles}>
            Segmento Industrial *
          </label>
          <select
            id="segmento"
            className={inputStyles}
            defaultValue=""
            {...register("segmento")}
          >
            <option value="" disabled>
              Selecione...
            </option>
            {SEGMENTOS_INDUSTRIAIS.map((segmento) => (
              <option key={segmento} value={segmento}>
                {segmento}
              </option>
            ))}
          </select>
          {errors.segmento && (
            <p className="font-sans text-xs text-orange">{errors.segmento.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="telefone" className={labelStyles}>
            Telefone *
          </label>
          <input id="telefone" type="tel" className={inputStyles} {...register("telefone")} />
          {errors.telefone && (
            <p className="font-sans text-xs text-orange">{errors.telefone.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className={labelStyles}>
          E-mail *
        </label>
        <input id="email" type="email" className={inputStyles} {...register("email")} />
        {errors.email && (
          <p className="font-sans text-xs text-orange">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="descricao" className={labelStyles}>
          Descrição Técnica do Problema *
        </label>
        <textarea
          id="descricao"
          rows={5}
          className={`${inputStyles} resize-none`}
          {...register("descricao")}
        />
        {errors.descricao && (
          <p className="font-sans text-xs text-orange">{errors.descricao.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="arquivo" className={labelStyles}>
          Fotos ou Documentos do Componente
        </label>
        <label
          htmlFor="arquivo"
          className={`${inputStyles} cursor-pointer truncate text-text-secondary`}
        >
          {fileName ?? "Selecionar arquivo (imagem ou PDF, máx. 5MB)"}
        </label>
        <input
          id="arquivo"
          type="file"
          accept="image/*,.pdf"
          className="sr-only"
          {...register("arquivo")}
        />
        {errors.arquivo && (
          <p className="font-sans text-xs text-orange">{errors.arquivo.message as string}</p>
        )}
      </div>

      {status === "error" && (
        <p className="font-sans text-sm text-orange">
          Não foi possível enviar sua solicitação agora. Tente novamente em
          instantes.
        </p>
      )}

      <Button type="submit" variant="primary" disabled={status === "submitting"} className="mt-2 w-full normal-case sm:w-auto">
        {status === "submitting" ? "Enviando..." : "Solicitar Avaliação Técnica"}
      </Button>
    </form>
  );
}
