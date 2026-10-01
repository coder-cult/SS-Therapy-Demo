import AuthForm from "@/components/AuthForm";

export const metadata = { title: "Log in · Serenity" };

export default function LoginPage() {
  return <AuthForm mode="login" />;
}
