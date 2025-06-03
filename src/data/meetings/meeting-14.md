---
title: 📝 Meeting 14
id: 14
date: 2025-03-06
---

📅 Date: 04/03/2025  

📍 Place / Platform: Maker-Lab  

👥 Participants  

- Guilherme Rosa  
- Henrique Freitas  
- Henrique Teixeira  
- João Roldão  
- Rui Machado  

---

## 1. 🎯 Meeting Objective  

- **Presentation**  
- **Preferences**  
- **Architecture**

## 2. 💬 Discussion and Decisions  

### **Presentation Structure**  

#### **Henrique Teixeira**  
- **Introduction**  
  - Recap of the previous presentation  
    - Problem statement and goals  
- **State of the Art (SoA)**  
- **Functional Requirements**  

#### **Rui Machado**  
- **FlowChart**  
  - Divide into **subsections** for presentation clarity  
- **MockUp Video of Use Case**  
  - Include **step-by-step subtitles**  

#### **Henrique Freitas**  
- **Non-Functional Requirements**  
- **Architecture**  
  - **Divide into subsections** for presentation (**pending final decision**)  
- **Architecture Flow of Use Case**  
- **Domain Model**  
- **Project Timeline**  

### **Preferences Discussion**  

- **Use Cases Updates**  
  - Missing cases for **saving and editing travel preferences**  
  - Add a new **actor role** capable of adding trips  

- **Hidden Preferences**  
  - Discussed whether to apply them to **users or user preference profiles**  
  - **Final decision**: Apply to **User Preference Profile**  

### **Architecture Adjustments**  

- **Remove Reviews Wrapper**  
- **Recommendation Service Cache** should only be applied to the **Recommendation Module**  
- **Database Structure:**  
  - **Users:** MySQL  
  - **Trips:** MongoDB  
  - **Caches:** Redis  
- **Database Type Discussion for Users**  
  - Focus on **preferences storage**  
  - **Decision:** Add **Taste Profile Module** with a dedicated **database**  

## 3. 📝 Task Assignments  

- **Roldão** → Update **Architecture & Workflow**  
- **Rui** → **MockUps & Use Cases**  
- **Guilherme** → **Data Domain & Timeline**  
- **Freitas** → **MockUps**  
- **Teixeira** → **Presentation & Upload FlowChart to Drive**  

---

📅 **Next Meeting:** 10/03/2025 | **11:15 - 12:15** 