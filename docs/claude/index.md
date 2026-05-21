# Claude Code 配置 SooAPI

## 概述

Claude Code 是 Anthropic 官方的 CLI 工具，可以通过配置环境变量使用 SooAPI 作为后端。

## 配置步骤

### 1. 设置环境变量

在终端中运行：

```bash
export OPENAI_API_KEY="your-sooapi-token"
export OPENAI_BASE_URL="https://sooapi.com/v1"
```

### 2. 验证 Claude 可用模型

```bash
claude models list
```

确保能看到 SooAPI 支持的模型。

### 3. 启动 Claude Code

```bash
claude
```

## 常见问题

### 报错 "Invalid token"

检查你的 Token 是否正确，以及是否设置了正确的 Base URL。

### 看不到想要的模型

确认 SooAPI 渠道中已添加该模型，且 Token 有权限访问。

## 相关链接

- [Claude Code 官方文档](https://docs.anthropic.com/claude-code)
- [环境变量配置 →](/docs/env/)
- [Token 创建 →](/docs/token/)