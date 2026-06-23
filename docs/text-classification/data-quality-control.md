---
sidebar_position: 12
sidebar_label: "Data Quality Control"
---

# Data Quality Control

Quality control should begin before full-scale annotation and continue throughout the process. Start with a pilot phase, then refine the guidelines, then monitor annotator performance using gold-standard items, disagreement review, and periodic feedback.

A practical quality-control workflow is:

Pilot annotation → guideline revision → main annotation → gold checks → disagreement review → adjudication → final dataset release.

Data quality control ensures that your sentiment labels are accurate, consistent, and reliable.

- Clear annotation guidelines: Provide precise definitions of sentiment classes (positive, negative, neutral) with examples, including tricky cases like sarcasm, negation, and mixed opinions. This reduces confusion and inconsistency.
- Multiple annotators & agreement: Assign each item to at least 2–3 annotators and measure how much they agree (e.g., using Kappa). High agreement indicates reliable labels.
- Gold-standard checks: Include a small set of pre-labeled (trusted) examples during annotation to evaluate annotator performance continuously.
- Disagreement resolution: Use majority voting or expert review to finalize labels when annotators disagree.
- Data cleaning: Remove duplicates, irrelevant content, spam, and noisy text to improve overall dataset quality.
- Class balance: Check that sentiment categories are not overly skewed (e.g., too many positives), or account for imbalance during modeling.
- Ongoing monitoring: Track annotator behavior over time to detect inconsistency or fatigue and take corrective action.

In short: combine good guidelines, multiple reviews, and continuous checks to maintain high-quality sentiment data.

### **Quality-control policy**
- Use at least three annotators per item, and preferably more when feasible.
- Include gold-standard examples to monitor accuracy over time.
- Review items with persistent disagreement.
- Remove annotators whose responses are random, careless, or systematically inconsistent.
- Record adjudication decisions for transparency.

Example how to make majority voting:
```python
from collections import Counter
def majority_vote(labels):
    return Counter(labels).most_common(1)[0][0]
```