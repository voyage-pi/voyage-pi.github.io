---
---
# Contributing Guidelines

## General Code Guidelines
- **Use snake_case for variables and functions**: Follow Python’s naming conventions.
- **Use type hints**: All function parameters and return values must have explicit type annotations.
- **Use Pydantic for data validation**: All request/response models should be implemented using [Pydantic](https://docs.pydantic.dev/latest/).
- **Write docstrings**: Use clear and concise docstrings for important functions, classes, and modules. Not necessary for trivial functions.

## FastAPI Best Practices
- **Use dependency injection**: Utilize FastAPI’s dependency injection system for cleaner and more testable code.
- **Use response models**: Avoid returning raw dictionaries; always return a Pydantic model.

## Git and Version Control
- **Write meaningful commit messages**: Use concise and descriptive commit messages.
- **Follow branch naming conventions**: Example: `feature/<feature-name>`, `bugfix/<issue-number>`.
- **Use pull requests**: All changes should be reviewed through pull requests before merging.
