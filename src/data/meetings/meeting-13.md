---
title: 📝 Meeting 13
id: 13
date: 2025-03-05
---

📅 Date: 04/03/2025  

📍 Place / Platform: IEETA  

👥 Participants  

- Daniel Ferreita
- Guilherme Rosa  
- Henrique Freitas  
- Henrique Teixeira  
- João Roldão  
- Rui Machado  

---


## 1. 🎯 Meeting Objective  

- **Use Case Diagram**  
- **Mockups**  
- **Data Models**  
- **Presentation**  

## 2. 💬 Discussion and Decisions  

### **Use Case Diagrams**  

- **Introduce an author role that can create an itinerary**  
  - **Why?**  
    - Solves the **cold start** problem by pre-populating categories  
    - Ensures the system doesn’t generate **nonsensical itineraries**  
  - **Why not?**  
    - Not exactly what our app does  
    - Data comes from **users and APIs**, not from other users' itineraries  

- **Create a new use case diagram**  
  - Differentiate **group preferences** from **trip type preferences**  

- **Regarding Preferences:**  
  - **Edit preferences** → **extends** from "Create group trip"  
  - **Starting a trip** is a **separate use case**  
    - **Selecting** place, zone, or road trip should **extend** from it  
  - **Same applies to group preferences**  

### **Mockups**  

- **Modify Friends Page format**  
  - Use **DaisyUI stat component**  
- **Move the "Create" button**  
  - Place it **next to the search bar**  

### **Data Models**  

- Define **all parameters** for the **Report**  
  - **Not all need to be presented**  
- Must **show Data Models** in the presentation  

### **Questions from Guilherme**  

- **Adjustments** in preferences vs. user  
  - **Answer:** Adjustments are **preference-based**  

### **Presentation**  

#### **Product Section**  
- **Requirements**  
- **Use Cases with Flow Chart**  
- **Wireframe of a core use case**  
  - **Tell the story** of the **same user story** used in **architecture**  

#### **Technical Section**  
- **Architecture**  
- **Architecture flow with a user story**  
- **Data Models**  
- **Work Planning**  
  - Reference **PropertyEase methodology**  

### **Extras**  

- **Wireframe for a core use case**  
  - Storytelling approach  
- **Apply KISS principle** to Jira and project organization  
- **Organize repository per service**  

## 3. 📝 Task Assignments  

- **Roldão** → Workflow of **Architecture**  
- **Rui** → **Mockups, Use Cases**  
- **Guilherme** → **Data Domain** (full structure & presentation content)  
- **Freitas** → **Mockups**  
- **Teixeira** → **Presentation slides**  
- **Daniel** → **Create Report Template**  

---

📅 **Next Meeting:** 06/03/2025 | **14:30 - 16:00**  
📅 **Next Meeting w/Daniel:** 07/03/2025 | **14:00 - 15:00**  