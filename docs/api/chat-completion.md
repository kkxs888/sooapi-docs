# Chat Completions API

## 概述

SooAPI 兼容 OpenAI 的 Chat Completions API。

## 接口地址

```
POST https://sooapi.com/v1/chat/completions
```

## 请求头

| Header | 值 | 说明 |
|--------|-----|------|
| `Authorization` | `Bearer YOUR_TOKEN` | API Token |
| `Content-Type` | `application/json` | 请求类型 |

## 请求体

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `model` | string | 是 | 模型名称 |
| `messages` | array | 是 | 对话消息 |
| `temperature` | number | 否 | 随机性 (0-2) |
| `max_tokens` | integer | 否 | 最大输出 token 数 |
| `stream` | boolean | 否 | 是否流式输出 |
| `top_p` | number | 否 | 核采样概率 |

## messages 格式

```json
{
  "messages": [
    {"role": "system", "content": "你是一个助手"},
    {"role": "user", "content": "你好"}
  ]
}
```

## 完整示例

```bash
curl https://sooapi.com/v1/chat/completions \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4o-mini",
    "messages": [
      {"role": "user", "content": "你好，介绍一下自己"}
    ],
    "max_tokens": 100
  }'
```

## 响应示例

```json
{
  "id": "chatcmpl-xxx",
  "model": "gpt-4o-mini",
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "你好！我是..."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 10,
    "completion_tokens": 50,
    "total_tokens": 60
  }
}
```

## 可用模型

| 模型 | 类型 | 说明 |
|------|------|------|
| `gpt-4o` | GPT-4o | 多模态旗舰模型 |
| `gpt-4o-mini` | GPT-4o Mini | 高性价比 |
| `gpt-4.1` | GPT-4.1 | 最新旗舰 |
| `gpt-4.1-mini` | GPT-4.1 Mini | 高性价比 |
| `claude-sonnet-4-20250514` | Claude | Anthropic 模型 |
| `gemini-2.5-flash` | Gemini | Google 模型 |
| `o1` | o1 | OpenAI 推理模型 |
| `o3` | o3 | 新一代推理模型 |

## 错误码

| 错误码 | 说明 |
|--------|------|
| `401` | 认证失败 |
| `403` | 无权限 |
| `404` | 模型不存在 |
| `429` | 请求过于频繁 |
| `500` | 服务器错误 |

## 相关文档

- [Claude Code 配置 →](/docs/claude/)
- [OpenAI SDK →](/docs/openai-sdk/)