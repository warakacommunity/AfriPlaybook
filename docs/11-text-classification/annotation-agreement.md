---
sidebar_position: 8
sidebar_label: "Annotation Agreement"
---

# Annotation Agreement

Annotation agreement measures the extent to which multiple annotators assign the same labels to the same data instances. In text classification tasks, agreement is one of the most important indicators of dataset quality because it reflects the clarity of the annotation guidelines, the complexity of the task, and the consistency of the annotators. High agreement suggests that the labels are reliable and reproducible, while low agreement may indicate ambiguous definitions, insufficient annotator training, or inherently subjective phenomena.

## **Why Annotation Agreement Matters**

Annotation agreement serves various purposes:

- Evaluates the reliability of the annotated dataset.
- Identifies ambiguities in the annotation guidelines.
- Detects inconsistencies among annotators.
- Provides evidence of dataset quality for publications and benchmark releases.
- Helps determine whether a task is objectively measurable or highly subjective.

Agreement should be calculated and reported for every dataset that involves human annotation if the data is annotated by two and more annotators.

## **Percentage Agreement**

The simplest measure of agreement is percentage agreement, which calculates the proportion of instances for which annotators assigned the same label.

Agreement  %= (Number of Agreed instances / Total Number of Instances) * 100

*For example, if two annotators label 1,000 texts and agree on 850 of them:*

Agreement %  = (850 / 1000) * 100 = 85%

Although easy to understand, percentage agreement does not account for agreement occurring by chance and should not be the only metric reported.

## **Agreement Between Two Annotators**

When exactly two annotators label each instance, Cohen's Kappa is the most commonly used agreement metric. Cohen's Kappa adjusts for the amount of agreement that could occur purely by chance.

Kappa = (Observed Agreement - Expected Agreement) / (1 - Expected Agreement)

Or

Kappa = (Po - Pe) / (1 - Pe) 

Where:

**Observed agreement  (Po) **is the proportion of instances where the annotators actually agreed.

Po​=Total number of items/Number of agreements​

**Expected Agreement (Pe)** represents the level of agreement that would be expected to occur purely by chance, given the distribution of labels assigned by each annotator. It is calculated by determining the probability that both annotators independently select the same category and then summing these probabilities across all categories.  

Cohen's Kappa is widely used in sentiment analysis, hate speech detection, topic classification, emotion classification, and many other NLP tasks involving two annotators.

### **Python Example**

from sklearn.metrics import cohen_kappa_score

annotator1 = [0, 1, 1, 0, 2]

annotator2 = [0, 1, 0, 0, 2]

kappa = cohen_kappa_score(annotator1, annotator2)

print(kappa)

## **Agreement Among Three or More Annotators**

Many NLP datasets use three or more annotators per instance to improve reliability and reduce the influence of individual biases.

When more than two annotators are involved, commonly used agreement measures include:

### **Fleiss' Kappa**

Fleiss' Kappa extends Cohen's Kappa to multiple annotators and is one of the most widely reported agreement measures in NLP datasets.

It is appropriate when:d 

- Three or more annotators label each instance.
- Every instance receives the same number of annotations.

Fleiss kappa (k) = P−Pe)/(1-Pe)

Where 

p  is the mean of the agreement probability over all raters and 

Pe is the mean agreement probability over all raters if they were randomly assigned.

### **Krippendorff's Alpha**

Krippendorff's Alpha is a more flexible agreement measure that:

- Supports any number of annotators.
- Handles missing annotations.
- Works with nominal, ordinal, interval, and ratio labels.
- Is increasingly recommended for modern annotation studies.

For complex annotation projects, Krippendorff's Alpha is often considered the most robust agreement metric.

## **Deciding the Final Labels**

When multiple annotators label the same instance, the final label is usually determined through majority voting.

For example, in three annotators,  at least two annotators must agree on a label for it to become the final label. Similarly, with five annotators, at least three annotators must agree on a label for it to become the final label. Using an odd number of annotators (3, 5, or 7) avoids ties and simplifies majority voting.

## **Interpreting Agreement Scores**

Although interpretation varies slightly across fields, the following ranges are commonly used for Kappa-based agreement measures:

Kappa Score	Interpretation

< 0.00	Poor Agreement

0.00 - 0.20	Slight Agreement

0.21 - 0.40	Fair Agreement

0.41 - 0.60	Moderate Agreement

0.61 - 0.80	Substantial Agreement

0.81 - 1.00	Almost Perfect / Excellent Agreement

*As a general guideline:*

< 0.40: dataset quality should be carefully reviewed.

0.40-0.60: acceptable for difficult or subjective tasks.

0.60-0.80: considered good agreement.

Above 0.80: considered very strong agreement.

For highly subjective tasks such as emotion classification, sarcasm detection, or offensiveness annotation, lower agreement scores may still be acceptable due to genuine differences in human interpretation.

## **What to Report**

When publishing a dataset, researchers should report:

1. Number of annotators.
2. Annotation procedure/giudeline.
3. Final label aggregation method (e.g., majority voting).
4. Cohen's Kappa (for two annotators) or Fleiss' Kappa/Krippendorff's Alpha (for three or more annotators) agreement score.
5. Any adjudication process used to resolve disagreements.
6. Annotator-level dataset for further annotator subjectivity and disagreement research.

Transparent reporting of annotation agreement improves the credibility, reproducibility, and scientific value of the dataset.