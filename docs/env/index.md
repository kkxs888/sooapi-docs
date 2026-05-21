# 环境变量配置

## Base URL

将你的请求发送到 SooAPI 的端点：

```
https://sooapi.com/v1
```

## API Key

将你创建的 Token 设置为 API Key：

```bash
export OPENAI_API_KEY="your-sooapi-token"
export OPENAI_BASE_URL="https://sooapi.com/v1"
```

## 常用模型

| 模型 | 说明 |
|------|------|
| `gpt-4o` | GPT-4o 主模型 |
| `gpt-4o-mini` | GPT-4o 轻量版 |
| `claude-sonnet-4-20250514` | Claude Sonnet 4 |
| `gemini-2.5-flash` | Gemini 2.5 Flash |

## 验证配置

配置完成后，可以运行以下命令验证：

```bash
curl https://sooapi.com/v1/models \
  -H "Authorization: Bearer your-sooapi-token"
```

如果返回模型列表，说明配置成功。