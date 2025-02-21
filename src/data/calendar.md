```mermaid
%%{
  init: {
    'theme': 'base',
    'themeVariables': {
      'primaryColor': '#fe385c',
      'primaryTextColor': '#000',
      'primaryBorderColor': '#FFF',
      'tertiaryColor': '#fff'
    }
  }
}%%
gantt
    dateFormat YYYY-MM-DD
    section Inception-M1
    Setup tools           :active, inc1, 2025-02-10, 2025-02-23
    Goal definition      :active, inc2, 2025-02-10, 2025-02-23
    Context research     :active, inc3, 2025-02-10, 2025-02-23
    High-level architecture :active, inc4, 2025-02-10, 2025-02-23
    Project Calendar     :active, inc5, 2025-02-10, 2025-02-23
    M1 presentation      :active, inc6, 2025-02-10, 2025-02-23

    section Elaboration-M2
    Requirement gathering :elab1, after inc6, 2025-03-10
    Context and SOA:      :elab2, after inc6, 2025-03-10
    Use cases             :elab3, after inc6, 2025-03-10
    Diagrams              :elab4, after inc6, 2025-03-10
    Define data sources  :elab8, after inc6, 2025-03-10
    Interface Mockups    :elab9, after inc6,2025-03-10

    section Construction Pt.1
    Setup services       :con1, 2025-03-11, 2025-03-25
    CI/CD Pipelines      :con2, 2025-03-11, 2025-03-25
    Data collectors      :con3, 2025-03-11, 2025-03-25
    Recommendation System :con4, 2025-03-11, 2025-03-25
    Recommendation UI    :con5, 2025-03-11, 2025-03-25

    section Construction Pt.2-M3
    Trip Creation System :con6, 2025-03-25, 2025-04-08
    Trip Creation UI    :con7, 2025-03-25, 2025-04-08

    section Construction Pt.3
    User System         :con8, 2025-04-08, 2025-04-22
    Group trips System  :con9, 2025-04-08, 2025-04-22
    Groups UI          :con10, 2025-04-08, 2025-04-22
    User UI            :con11, 2025-04-08, 2025-04-22

    section Construction Pt.4
    Multi-Factor Recommend.:con12, 2025-04-22, 2025-05-06
    Hidden Preferences System    :con13, 2025-04-22, 2025-05-06
    Authentication              :con14, 2025-04-22, 2025-05-06

    section Construction Pt.5
    Final Improvement          :con15, 2025-05-06, 2025-05-20
    Project Goal Validation    :con16, 2025-05-06, 2025-05-20

    section Transition-M4
    Video                      :trans1, 2025-05-20, 2025-06-03
    Demo                       :trans2, 2025-05-20, 2025-06-03
    Poster                     :trans3, 2025-05-20, 2025-06-03
    Technical report           :trans4, 2025-05-20, 2025-06-03

```