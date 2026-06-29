export const trackerData = {
  title: "Dedicated Issue Tracking Portal",
  description:
    "Every task, bug fix, and customization request goes through our transparent project portal -- so you always know what's happening with your store.",
  features: [
    {
      icon: "Plus",
      title: "Submit Issues Anytime",
      description: "Create tickets 24/7 via web portal, email, or Slack. Every submission gets an instant acknowledgment.",
    },
    {
      icon: "Activity",
      title: "Real-Time Status Updates",
      description: "Live status dashboard shows exactly where each task stands -- queued, in progress, testing, or done.",
    },
    {
      icon: "AlertCircle",
      title: "Priority Management",
      description: "Flag urgent issues as critical and they jump the queue. Set business impact to help us triage correctly.",
    },
    {
      icon: "Zap",
      title: "Faster Resolution",
      description: "Structured issue templates mean we gather all context upfront -- no back-and-forth before we start.",
    },
    {
      icon: "Eye",
      title: "Transparent Workflow",
      description: "Full audit trail of every action, comment, and update. Nothing happens behind closed doors.",
    },
  ],
  statuses: [
    { label: "Submitted", color: "bg-slate-400", desc: "Issue logged & acknowledged" },
    { label: "In Review", color: "bg-blue-400", desc: "Team analyzing scope & effort" },
    { label: "In Progress", color: "bg-yellow-400", desc: "Developer actively working" },
    { label: "Testing", color: "bg-purple-400", desc: "QA verification underway" },
    { label: "Delivered", color: "bg-green-400", desc: "Fix live on your store" },
  ],
}
