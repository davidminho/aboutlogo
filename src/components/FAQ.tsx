import { faqItems } from '@/lib/service'

export function FAQ() {
  return (
    <div className="faq-list">
      {faqItems.map(([question, answer], index) => (
        <details key={question} open={index === 0}>
          <summary>{question}</summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  )
}
