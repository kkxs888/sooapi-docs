# Gemini CLI 配置

## 概述

Google Gemini CLI 也可以配置使用 SooAPI 作为自定义端点。

## 配置步骤

### 1. 设置环境变量

```bash
export GOOGLE_API_KEY="your-sooapi-token"
export GOOGLE_BASE_URL="https://sooapi.com/v1"
```

### 2. 验证

```bash
gemini models list
```

### 3. 使用

```bash
gemini "你好，请介绍一下你自己"
```

## 可用模型

通过 SooAPI 的 Gemini 渠道，你可以访问：

| 模型 | 说明 |
|------|------|
| `gemini-2.5-flash` | 高速度与成本效益 |
| `gemini-2.5-pro` | 最强旗舰模型 |
| `gemini-2.0-flash` | 快速响应 |
| `gemini-3-flash-preview` | 下一代预览版 |

## 注意事项

- Gemini 模型兼容性可能因版本而异
- 如遇问题，请截图到群聊咨询客服