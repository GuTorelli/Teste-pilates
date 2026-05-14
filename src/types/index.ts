export type AgentRole = "user" | "assistant";

export type AgentMessage = {
  id: string;
  role: AgentRole;
  content: string;
  createdAt: number;
  status?: "streaming" | "done" | "error";
};

export type LeadData = {
  name: string;
  phone: string;
  unit: string;
};

export type Unit = {
  id: string;
  name: string;
  address: string;
  phone: string;
};
