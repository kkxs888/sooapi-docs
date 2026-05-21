# Codex / claude-code 配置

## 概述

OpenAI Codex 和 claude-code 可以通过 SooAPI 来调用 Claude 模型。

## 配置步骤

### 1. 设置环境变量

```bash
export OPENAI_API_KEY="your-sooapi-token"
export OPENAI_BASE_URL="https://sooapi.com/v1"
```

### 2. 使用

配置完成后，直接运行命令即可：

```bash
claude-code
```

## 模型选择

SooAPI 支持以下推理模型：

| 模型 | 说明 |
|------|------|
| `o1` | OpenAI o1 推理 |
| `o1-mini` | o1 轻量版 |
| `o3` | o3 推理 |
| `o3-mini` | o3 轻量版 |

## 注意事项

- 推理模型不支持 System Prompt
- 输入和输出 token 有单独计费
- 部分模型有速率限制