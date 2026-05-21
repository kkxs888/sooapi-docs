# OpenAI SDK 配置

## 概述

SooAPI 兼容 OpenAI 接口协议，可以直接使用 OpenAI SDK 调用。

## Python

### 安装

```bash
pip install openai
```

### 代码示例

```python
from openai import OpenAI

client = OpenAI(
    api_key="your-sooapi-token",
    base_url="https://sooapi.com/v1"
)

response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "user", "content": "Hello!"}
    ]
)

print(response.choices[0].message.content)
```

## Node.js

### 安装

```bash
npm install openai
```

### 代码示例

```javascript
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'your-sooapi-token',
  baseURL: 'https://sooapi.com/v1'
});

const response = await client.chat.completions.create({
  model: 'gpt-4o-mini',
  messages: [
    { role: 'user', content: 'Hello!' }
  ]
});

console.log(response.choices[0].message.content);
```

## cURL

```bash
curl https://sooapi.com/v1/chat/completions \
  -H "Authorization: Bearer your-sooapi-token" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4o-mini",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'
```

## 错误处理

| 错误码 | 说明 |
|--------|------|
| `401` | Token 无效 |
| `403` | 无权限访问该模型 |
| `429` | 请求过于频繁 |
| `500` | 服务器内部错误 |

如遇到未列出的错误，请截图咨询客服。